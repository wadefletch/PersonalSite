import React, { Component } from "react";

export class Section extends Component {
    render() {
        return (
            <div id={ this.props.id } className="mt-4">
                <h1>{ this.props.title }</h1>
                { this.props.children }
            </div>
        )
    }
}