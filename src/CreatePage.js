import React, { Component } from 'react'
import request from 'superagent';
import { createSong } from './Fetches.js';

    const userFromBeyond = {
    usedId: 1
};

export default class CreatePage extends Component {
    state = {
        category: [],
        alive: true,
        category_id: 1
    }

    componentDidMount = async () => {
        const response = await request.get(`https://safe-beyond-79072.herokuapp.com/category`);
        this.setState({ category: response.body });
    }

    handleSubmit = async  (e) => {
        e.preventDefault ();

    await createSong ({
            alias: this.state.alias,
            name: this.state.name,
            category_id: this.state.category_id,
            year: this.state.year,
            alive: this.state.alive,
            user_id: userFromBeyond.usedId
    });

    this.props.history.push('/');
    };

    handleChange = (e) => {
        this.setState({ category_id: e.target.value });
    }

    handleBooleanChange = (e) => {
        this.setState({ alive: e.target.value });
    }

    render() {
        console.log(this.state.category_id)
        return (
            <div className="forms" >
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Artist Alias
                        <input onChange={e => this.setState({ alias: e.target.value})} type="text"/>
                    </label>
                    <label>
                        Song Name
                        <input onChange={e => this.setState({ name: e.target.value})} type="text"/>
                    </label>
                    <label>
                        Song Year
                        <input onChange={e => this.setState({ year: e.target.value})} type="number"/>
                    </label>
                    <label>
                        Song Quality
                        <select onChange={this.handleBooleanChange}>
                            
                                <option value={true}>True</option>
                                <option value={false}>False</option>


                            
                        </select>
                    </label>
                    <label>
                        Album Name
                        <select onChange={this.handleChange}>
                            {
                                this.state.category.map(cate => 
                                <option key={cate.id} value={cate.id}>{cate.category}</option>)

                            }
                        </select>
                    </label>
                    <button>Submit</button>
                </form>
                
            </div>
        )
    }
}
