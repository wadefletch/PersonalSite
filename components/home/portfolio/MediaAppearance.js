import React, { Component } from 'react';

class MediaAppearance extends Component {
    render() {
        return (
            <article>
                <p className="dates">{ this.props.date }</p>
                <p className="body"><a href={ this.props.href } className="title leading-tight font-medium">{ this.props.title }</a></p>
                <p>{ this.props.outlet } → { this.props.author }</p>
            </article>
        );
    }
}

export default MediaAppearance;