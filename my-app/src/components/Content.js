import React, { Component } from 'react'
import css from './css/Content.module.css'
import PostItem from './PostItem'
import savedPosts from '../posts.json'
import Loader from './Loader'


export default class Content extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: false
      }
    }

// the method to check ift he dom component is done loading
    componentDidMount(){
        setTimeout(() => {
            //set the state
            this.setState(
                {
                    isLoaded: true
                }
            );
        }, 5000);
    }

  render() {
    return (
      <div className= {css.Content}>
        <div className= {css.TitleBar}>
            <h1>My Photos</h1>
        </div>
        <div className={css.SearchResults}>

        {
            this.state.isLoaded? <PostItem posts= {savedPosts.savedPosts}> </PostItem> :<Loader></Loader> 
            
        
        }

            
            
        </div>
      </div>
    )
  }
}
