"use strict"

import React from 'react';


export default React.createClass({

    saveArtist() {
        var that = this;
        var post_data;

        //event.preventDefault(e);

        post_data = {
            'id': this.props.id,
            'name': this.props.name,
            'url': this.props.url
        }

        // catch failure and response 'False'
        $.ajax("/save/" + that.props.id, {
            data: JSON.stringify(post_data),
            contentType : 'application/json',
            type : 'POST'
        })
            .done(function(data){
                //console.log(data);
                return true;
            }).fail(function() {
                //TODO: Warning no result
                return false;
        });

    },

    // TODO: default if no image
    render () {
        return (
            <div>
                <div>{this.props.name}</div>
                <img src={this.props.url} height={60}/>
                <button onClick={this.saveArtist}>Save</button>
            </div>

        )
    }
});