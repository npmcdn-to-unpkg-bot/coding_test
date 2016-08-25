"use strict"

import React from 'react';

import Artist from './Artist.jsx'

export default React.createClass({
    render () {
        var artistRows = [];
        this.props.artists.forEach(function(item, key) {
            var url = '';
            if (item.images.length > 0) {
                url = item.images[0].url
            }
            artistRows.push(
                <Artist name={item.name} url={url} id={item.id} key={key} />
            )
        });
        return (
            <div className="grid">
                {artistRows}
            </div>
        )
    }

});