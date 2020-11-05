import React, { Component } from 'react'
import request from 'superagent';

const userFromBeyond = {
    usedId: 1
};

export default class CreatePage extends Component {
    state = {
        category: []
    }

    componentDidMount = async () => {
        const response = await request.get(`https://safe-beyond-79072.herokuapp.com/category`);
        this.setState({ category: response.body });
    }

    handleSubmit = async  (e) => {
        e.preventDefault ();
    
        const newShiela = {
            alias_id: this.state.alias,
            name_id: this.state.name,
            alive_id: this.state.alive,
            category_id: this.state.category_id,
            year_id: this.state.year,
            user_id: this.userFromBeyond.usedId
        };

    await request
    .post(`https://safe-beyond-79072.herokuapp.com/shielas`)
    .send(newShiela)

    this.props.history.push('/');
    };

    handleChange = (e) => {
        this.setState({ category_id: e.target.value });
    }
    render() {
        return (
            <div className="forms" >
                {/* <form onSubmit={this.handleSubmit}>
                    <label>
                        Song Name
                        <input onChange={e => this.setState({ name: e.target.value})} type="text"/>
                    </label>
                    <label>
                        Song Year
                        <input onChange={e => this.setState({ year: e.target.value})} type="text"/>
                    </label>
                    <label>
                        Song Quality
                        <input onChange={e => this.setState({ alive: e.target.value})} type="text"/>
                    </label> */}
                    <label>
                        Album Name
                        <select onChange={this.handleChange}>
                            {
                                this.state.category.map(cate => 
                                <option key={cate.id} value={cate.id}>{cate.category}</option>)

                            }
                        </select>
                    </label>
                    {/* <button>Submit</button> */}
                {/* </form>
                 */}
            </div>
        )
    }
}
