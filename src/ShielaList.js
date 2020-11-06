import React, { Component } from 'react'
import Boolean from './Boolean.js';
import { fetchSongs } from './Fetches.js';


export default class ShielaList extends Component {

    state = {
        shielas: [],
        loading: ''
    }


    componentDidMount = async () => {
        const shielas = await fetchSongs();
        
        this.setState({ shielas });
    }

    render() {
        const { shielas } = this.state;
        return (
            <div>{
                shielas.length > 0 ?
                shielas.map(song => <div>
                <h1 className="alias">Artist:{song.alias}</h1>
                <h1 className="category">Album Name:{song.category_id}</h1>
                <h1 className="name">Song Name:{song.name}</h1>
                <p className="alive">Song Quality: <Boolean alive={song.alive}/></p>
                <p className="year">Year:{song.year}</p>
                <p className="id">{song.id}</p>
                </div>)
            : 'loading' 
                }
            </div> 
        )
    }
}
