import React from 'react'

export default function PostItem(props) {

    return (
    props.posts.map( (post) => <div className='css.SearchItem'>{
                <div>
                    <p>{post.title}</p>
                    <p>{post.name}</p>
                    <img src={post.image}></img>
                    <p>{post.description}</p>
                </div>
            }</div>)
  )
}
