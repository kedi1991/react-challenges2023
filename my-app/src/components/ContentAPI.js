import React, { Component } from 'react'
import css from './css/Content.module.css'
import PostItemAPI from './PostItemAPI'
import savedPosts from '../posts.json'
import Loader from './Loader'
import axios from 'axios'
import API_KEY from '../secrets'


export default class ContentAPI extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: false,
         posts: []
      }
    }

    // the method to check ift he dom component is done loading
    componentDidMount(){
        this.fetchImages()
    }

    fetchImages = () => {
      axios.get(`https://pixabay.com/api/?key=${API_KEY}`)
      .then(
            //set the state
response => {
            console.log(response)
            this.setState(
              {
                  isLoaded: true,
                  posts: response.data.hits
              }
            )}
      )
    }

    changeMaster = (e)=> {
      const textValue = e.target.value.toLowerCase()
      console.log(textValue)

      const filteredItems = savedPosts.savedPosts.filter( name => {
        return name.name.toLowerCase().includes(textValue)
      })

      this.setState({
        posts: filteredItems
      })
      
      console.log(filteredItems)
    }
  render() {
    return (
      <div className= {css.Content}>
        <div className= {css.TitleBar}>
            <h1>My Photos</h1>
            <form>
              <label>Search:</label>
              <input 
              id= 'searchInput' 
              type='text'
              onChange = {(e) => this.changeMaster(e)}  
              >
              </input>
              <h4>Posts found: {this.state.posts.length}</h4>
            </form>
        </div>
        <div className={css.SearchResults}>

        {
            this.state.isLoaded? <PostItemAPI posts = {this.state.posts}> </PostItemAPI> :<Loader></Loader> 
            
        
        }

            
            
        </div>
      </div>
    )
  }
}
