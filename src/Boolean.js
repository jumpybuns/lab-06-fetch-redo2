import React, { Component } from 'react'

export default class Boolean extends Component {
    render() {
        return (
            <div>
                {this.props.alive
                ?
                <span style={{color: "yellowgreen"}}>Good Song</span>
                :
                <span style={{color: "red"}}>Great Song</span>
                }
            </div>
        )
    }
}
