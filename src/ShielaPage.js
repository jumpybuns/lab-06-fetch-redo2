import React, { Component } from 'react'
import fetch from 'superagent';
import Header from './Header.js';
import { Link } from 'react-router-dom';
import Boolean from './Boolean';


export default class ShielaPage extends Component {
    state = {
        shielas: [],
        loading: false
    }

    componentDidMount = async () => {
        this.setState({ loading: true })

        const shiela = await fetch.get(`https://safe-beyond-79072.herokuapp.com/shielas`)
        
        this.setState({
            shielas: shiela.body,
            loading: false,

        })
    }
    handleBoolean = async (e) => {}

    render() {
        return (
            <div>
                <Header />
                <div className="shielas">
                    {   this.state.loading 
                        ? 'loading' 
                        : this.state.shielas.map(shiela => <div key={shiela.shielas}>
                                <Link to={`/details/${shiela.id}`}>
                            <h1 className="alias">Artist:{shiela.alias}</h1>
                            <h1 className="category">Album Name:{shiela.category}</h1>
                            <h1 className="name">Song Name:{shiela.name}</h1>
                            <p className="alive">Song Quality: <Boolean alive={shiela.alive}/></p>
                            <p className="year">Year:{shiela.year}</p>
                            </Link>
                            </div>
                        )}
                </div>
                
            </div>
        )
    }
}
