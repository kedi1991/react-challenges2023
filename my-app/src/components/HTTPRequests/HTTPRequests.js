import axios from 'axios'
import React, { Component } from 'react'

export default class HTTPRequests extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }
    //get the data after loading
    componentDidMount() {
        //then call the API
        axios.get("https://jsonplaceholder.org/posts/1").then(
            response => {
                console.log(response);
                this.setState({
                    posts: response.data
                })
            }
        )
    }

    render() {
        const posts = this.state.posts;
        return (
            <div>
                <h1><strong/>Post:<strong/></h1>
                {posts.map(item => (
                    <div>
                    <h3>{item.id}.{item.title}</h3>
                    <h4>{item.content}</h4>
                    <img src='{item.image}'></img>
                    <hr></hr>
                    </div>
                )) }
            </div>
        )
    }
}
