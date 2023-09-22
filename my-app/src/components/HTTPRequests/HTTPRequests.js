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
            response => {console.log(response)}
        )
    }

  render() {
    return (
      <div>HTTPRequests</div>
    )
  }
}
