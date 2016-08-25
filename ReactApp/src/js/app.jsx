"use strict";

import React from 'react';
import ReactDOM from 'react-dom'

import Form from './Components/Form.jsx'
import ArtistList from './Components/ArtistList.jsx'


var App = React.createClass({

    getInitialState() {
        return {
            artists: []
        }
    },

    updateArtists(artists) {
        this.setState( {
            artists: artists
        })
    },

    render() {
        return (
            <div>
                <h1>Coding Test</h1>
                <Form updateArtists={this.updateArtists} />
                <ArtistList artists={this.state.artists} />
            </div>
        )
    }
});

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);