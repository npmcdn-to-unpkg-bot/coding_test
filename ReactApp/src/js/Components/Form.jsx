"use strict"

import React from 'react';

export default React.createClass({

    getInitialState() {
        return {
            name: ""
        }
    },

    handleNameChange(e) {
        this.setState(
            {
                name: e.target.value
            }
        )
    },

    handleSubmit(event) {
        var that = this;
        that.props.updateArtists([])
        event.preventDefault();
        $.getJSON("/search/artist/" + that.state.name)
            .done(function(data){
                that.props.updateArtists(data.artists.items);
            }).fail(function() {
            //TODO: Warning no result / 404
             that.props.updateArtists([]);
        });
    },

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="artist" onChange={this.handleNameChange}/>
                <input type="submit" className="button" />
            </form>
        )
    }
});