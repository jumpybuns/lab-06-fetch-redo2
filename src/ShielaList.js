import React, { Component } from 'react'
import Boolean from './Boolean.js';

export default class ShielaList extends Component {
    render() {
        return (
            <div>
                <h1 className="alias">{this.props.shielas.alias}</h1>
                <h2>{this.props.shielas.name}</h2>
                <p className="alive">Song Quality: <Boolean alive={this.props.shielas.alive}/></p>
                <p className="year-introduced">Year:</p>
                <p className="year">{this.props.shielas.year}</p>
            </div>
        )
    }
}
