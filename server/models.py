from main import db

class Artist_sql(db.Model):
    __tablename__ = 'artist'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    image_url = db.Column(db.String)
    spotify_id = db.Column(db.String)

    def __init__(self, name, spotify_id, image_url):
        self.name = name
        self.image_url = image_url

    def __repr__(self):
        print(db)
        return '<Artist_sql %r>' % self.spotify_id