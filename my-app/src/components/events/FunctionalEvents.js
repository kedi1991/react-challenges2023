import React from 'react'

function FunctionalEvents() {

    function handleClick(){
        console.log("clikced rhe fx")
    }


  return (
    <button onClick={handleClick}>FunctionalEvents</button>
  )
}

export default FunctionalEvents