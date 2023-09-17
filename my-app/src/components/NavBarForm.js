import React, { Component } from 'react'
import css from  "./css/NavBarForm.module.css"
import NavBarChild from './NavBarChild'

class NavBarForm extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          isLoggedIn: true
       }
     }

     handleClick = () => {
        console.log("button click")
        this.setState({
            isLoggedIn: false
        
        });
     }
  
    render(){
        return <div>
            <div className='NavBar'>
            <h1>My gallery</h1> 
            <button onClick={this.handleClick}>Login</button>
           
            {/**render button or the form */}
            {this.state.isLoggedIn === true? <NavBarChild></NavBarChild> : <button onClick={this.handleClick}>Login</button>}
             
           
            </div>
        </div>
            
    }
   
  
}

export default NavBarForm