import React, { Component } from 'react'
import css from './css/Content.module.css'
import PostItem from './PostItem'
import savedPosts from '../posts.json'


export default class Content extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

  render() {
    return (
      <div className= {css.Content}>
        <div className= {css.TitleBar}>
            <h1>My Photos</h1>
        </div>
        <div className={css.SearchResults}>
            <PostItem posts= {savedPosts.savedPosts}>

            </PostItem>
        </div>
      </div>
    )
  }
}
