import React, { useEffect, useState } from 'react'

export default function ContentAPIHooks() {

const [isLoaded, setIsLoaded] = useState(false)
const [count, setCount] = useState(0)
//const [posts, setPosts] = setPosts()

useEffect(()=> {
    //change the count every second
    setTimeout(()=>{
        //What do you do in those seconds
        setCount( (count) => count + 1
        )
    }, 1000)
},[count])

  return (
    <div>{count}</div>
  )
}
