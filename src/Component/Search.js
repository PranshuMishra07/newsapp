import React, { Component } from 'react';
import axios from 'axios';
import Presentation from './Presentation';

class Search extends Component {
    state = {
        data: [],
        loading: null,
        value: ''
    };

    search = async val => {
        this.setState({ loading: true });
        const response = await axios(
            `https://newsapi.org/v2/everything?q=${val}&from=2019-10-10&to=2019-10-10&sortBy=popularity&apiKey=129f9eae3a934c2bb5cd1a8ae9807064`
        );
        const data = await response.data.articles;
        this.setState({ data, loading: false });
    };

    onChangeHandler = async e => {
        this.search(e.target.value);
        this.setState({ value: e.target.value });
    };
    
    render() {
        return (
            <div>
                <input
                    value={this.state.value}
                    onChange={e => this.onChangeHandler(e)}
                    placeholder="Type something to search"
                />
                <Presentation data={this.state.data} />
            </div>
        );
    }
}

export default Search;                                      