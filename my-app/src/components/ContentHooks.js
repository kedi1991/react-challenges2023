import React, { useEffect, useState } from 'react'
import css from './css/Content.module.css'
import PostItem from './PostItem'
import savedPosts from '../posts.json'
import Loader from './Loader'


function ContentHooks() {

    const [isLoaded, setIsLoaded] = useState(false)
    const [posts, setPosts] = useState(savedPosts.savedPosts)

    // the method to check ift he dom component is done loading

    useEffect(() => {

        setIsLoaded(true)
        //setPosts()
        setTimeout({
        }, 2000);
    }, [isLoaded]);

    return (
        <div className= {css.Content}>
          <div className= {css.TitleBar}>
              <h1>My Photos</h1>
              <form>
                <label>Search:</label>
                <input 
                id= 'searchInput' 
                type='text'
                onChange = {useEffect}  
                >
                </input>
                <h4>Posts found: {posts.length}</h4>
              </form>
          </div>
          <div className={css.SearchResults}>
  
          {
              isLoaded? <PostItem posts = {posts}> </PostItem> :<Loader></Loader> 
          }    
          </div>
        </div>
      )
}

export default ContentHooks