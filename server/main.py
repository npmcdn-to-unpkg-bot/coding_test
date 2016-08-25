#TODO: catch exceptions, write tests, comments/documentation

from flask import Flask
from flask import render_template, send_from_directory, jsonify, request

from flask_sqlalchemy import SQLAlchemy

import os.path
import requests


app = Flask(__name__)
#TODO: config file
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://flaskuser:qwertz@localhost:5432/coding_test'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


from models import *

#TODO: handlers in handlers.py
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/js/bundle.js')
def bundle():
    #print(os.path.join('..', 'ReactApp','build', 'js'))
    return send_from_directory(os.path.join('..', 'ReactApp','build', 'js'), 'bundle.js')


@app.route('/css/app.css')
def app_css():
    #print(os.path.join('..', 'ReactApp','build', 'js'))
    return send_from_directory(os.path.join('.', 'css'), 'app.css')

@app.route('/search/artist/<name>')
def search_artist(name):
    query = requests.get("https://api.spotify.com/v1/search?q=" + name + "&type=artist")
    query_dict = dict(query.json())
    # TODO: reduce dict
    return jsonify(query_dict)

@app.route('/save/<spotify_id>', methods=['POST'])
def save_artist(spotify_id):
    if request.json:
        ajax_request = request.json
        artist = Artist_sql(name=ajax_request['name'], spotify_id=ajax_request['id'], image_url=ajax_request['url'])
        #TODO: test database!!!!
        db.session.add(artist)
        db.session.commit()
        return jsonify({'status': 1})

    else:
        return jsonify({'status': 0})

if __name__ == '__main__':
    app.run()