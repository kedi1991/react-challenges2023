import React, { Component } from 'react'
import css from './css/Content.module.css'
import PostItem from './PostItem'
import savedPosts from '../posts.json'
import Loader from './Loader'


export default class Content extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: false,
         posts: []
      }
    }

// the method to check ift he dom component is done loading
    componentDidMount(){
        setTimeout(() => {
            //set the state
            this.setState(
                {
                    isLoaded: true,
                    posts: savedPosts.savedPosts
                }
            );
        }, 5000);
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
            this.state.isLoaded? <PostItem posts = {this.state.posts}> </PostItem> :<Loader></Loader> 
            
        
        }

            
            
        </div>
      </div>
    )
  }
}
