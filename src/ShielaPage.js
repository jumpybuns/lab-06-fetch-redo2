import React, { Component } from 'react'
import ShielaList from './ShielaList'
import fetch from 'superagent';
import Header from './Header.js';

export default class ShielaPage extends Component {
    state = {
        shielas: [],
    }

    componentDidMount = async () => {
        const shiela = await fetch.get(`https://safe-beyond-79072.herokuapp.com/shiela`)
        this.setState({
            shielas: shiela.body
        })
    }
    handleBoolean = async (e) => {}

    render() {
        return (
            <div>
                <Header />
                <div className="shielas">
                    {
                        this.state.shielas.map(shielas =>
                            <div key={shielas.shielas}>
                                <ShielaList
                                shielas={shielas}/>
                            </div>
                        )}
                </div>
                
            </div>
        )
    }
}
