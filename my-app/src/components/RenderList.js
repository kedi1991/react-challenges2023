import React from 'react'

function RenderList() {

    const myBooks = ["The animal farm", "Harry potter", "Things fall apart"]

  return (
    <div>
        { myBooks.map( book => <h2 key={book}>{book}</h2>) }  
    </div>
  )
}

export default RenderList