import React, { Component } from 'react'
import request from 'superagent';
import { updateSong, deleteSong } from './Fetches.js';
import shiela2 from './shielap.jpg';

const userFromBeyond = {
    userId: 1
};


export default class DetailsPage extends Component {

    state = {
        category: [],
        alias: '',
        name: '',
        year: '',
        alive: true,
        category_id: 1
       

    }
    componentDidMount = async () => {
        const response = await request.get(`https://safe-beyond-79072.herokuapp.com/shielas`);
        this.setState({ category: response.body });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await updateSong(
            this.props.match.params.id,
            {   
                alias: this.state.alias,
                name: this.state.name,
                category_id: this.state.category_id,
                year: this.state.year,
                alive: this.state.alive,
                user_id: userFromBeyond.userId
            }
        );
        this.props.history.push('/');
    }

    handleDelete = async (e) => {
        await deleteSong(this.props.match.params.id);
        this.props.history.push('/');
    }

    handleBooleanChange = (e) => {
        this.setState({ alive: e.target.value });
    }

    handleChange = (e) => {
        this.setState({ category_id: e.target.value });
    }
    render() {
        return (
            <div>
                <img src={shiela2} width='200' alt="pic"/>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Artist Name
                        <input value={this.state.alias} onChange={e => this.setState({ alias: e.target.value})} type="text"/>
                    </label>
                    <label>
                        Song Name
                        <input value={this.state.name}  onChange={e => this.setState({ name: e.target.value})} type="text"/>
                    </label>
                    <label>
                        Song Year
                        <input value={this.state.year} onChange={e => this.setState({ year: e.target.value})} type="number"/>
                    </label>
                    <label>
                        Song Quality
                        <select value={this.state.alive}  onChange={this.handleBooleanChange}>                          
                                <option value={true}>Good</option>
                                <option value={false}>Great</option>                           
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
                <button onClick={this.handleDelete} className="delete-button">Delete Song</button>
            </div>
        )
    }
}
