import React, { Component } from 'react'
import { fetchCategories, 
            updateSong,
            fetchSong } from './Fetches.js';

const userFromBeyond = {
    userId: 1
};


export default class DetailsPage extends Component {

    state = {
        albums: [],
        song: '',
        year: '',
        quality: true,
        category_id: ''
       

    }

    componentDidMount = async () => {
        const albums = await fetchCategories();
        const song = await fetchSong(this.props.match.params.id);
        const songAsAString = song.category
        const matchingCategory = albums.find((category) => {
            return category.name === songAsAString
        });    
    
        this.setState({
            songs: albums,
            category_id: matchingCategory.id,
            song: song.name_id,
            user_id: song.id
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await updateSong(
            this.props.match.params.id,
            {   
                year_id: this.state.year,
                category_id: this.state.category_id,
                name_id: this.state.name,
                user_id: userFromBeyond.userId
            }
        );
        this.props.history.push('/');
    }

    handleChange = (e) => {
        this.setState({ category_id: e.target.value});
    }
    render() {
        return (
            <div>

                <h2>Update A Song</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Year
                        <input 
                        value={this.state.year}
                        onChange={e => this.setState({ year: e.target.value})} 
                        type="number" />
                    </label>
                    <label>
                        Song Name
                        <input 
                        value={this.state.name_id}
                        onChange={e => this.setState({ name: e.target.value})} 
                        type="text" />
                    </label>
                    <label>
                        Album Name
                        <input 
                        value={this.state.category_id}
                        onChange={e => this.setState({ category: e.target.value})} 
                        type="text" />
                    </label>
                    {/* <label>
                        Song Quality
                        <input 
                        value={this.state.year}
                        onChange={e => this.setState({ year: e.target.value})} 
                        type="boolean" />
                    </label> */}
                    <button>Submit</button>
                </form>    
            </div>
        )
    }
}
