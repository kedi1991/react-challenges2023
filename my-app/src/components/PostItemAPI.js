import React from 'react'

export default function PostItemAPI(props) {

    return (
    props.posts.map( (post) => <div className='css.SearchItem'>{
                <div key={post.id}>
                    <p>{post.id}.{post.user}</p>
                    <p>{post.tags}</p>
                    <img src={post.webformatURL}></img>
                </div>
            }</div>)
  )
}
