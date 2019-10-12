import React from 'react';
import axios from "axios";
import Presentation from './Presentation';


class Home extends React.Component {
    state = {
        loading:null,
        data: [],
    };


    async componentDidMount() {
        await this.getData();
    }


    getData = async () => {
        this.setState({ loading: true },
            () => axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=129f9eae3a934c2bb5cd1a8ae9807064')
                .then(response => {
                    this.setState({
                        loading: false,
                        data: response.data.articles
                    });
                }).catch((error) => {
                    console.log(error.message);
                })
        )

            }

    render() {
        return (
            <div>
                <Presentation data={this.state.data} />
            </div>

        )
    }
}

export default Home;