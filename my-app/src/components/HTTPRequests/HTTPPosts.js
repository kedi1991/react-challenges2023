import axios from 'axios'
import React, { Component } from 'react'

export default class HTTPPosts extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts : []
      }
    }

    componentDidMount(){
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            title: 'studies',
            body: 'Computer engineering',
            userId: 1,
        })
        .then(response => this.setState({
            posts: response.data
        }))
    }

  render() {
    const stuff = this.state.posts

    return (
    
        <div>
            <h4>{stuff.title}</h4>
            <h4>{stuff.body}</h4>
        </div>     

)
      
     
}
}
