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
    componentDidMount(){
        //then call the API
        axios.get("https://jsonplaceholder.org/posts").then(
            response => {
                console.log(response)
                this.setState({
                    posts: response.data
                })
            }
        )

        

        
    }

  render() {
    return (
      <div>
        <strong>Posts:</strong>
        <p>{JSON.stringify(this.state.posts)}</p>
      </div>
      
    )
  }
}
