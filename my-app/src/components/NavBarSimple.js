import React from "react";
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            message:"Hello, guest!",
            buttonText: "Login"
        }
    }

    handleClick = () => {

        //make prevState the first attribute
        this.setState( (prevState, prevProps) =>{

            return {
                message : prevState.message === "Welcome back, user!" ? "Hello, guest!" : "Welcome back, user!",
                buttonText : prevState.buttonText === "Login" ? "Logout" : "Login"
            }
        });

        console.log("clicked...");
    }

    render = () => {
        return <div className={css.NavBar}>
           
            <div>
                <span>{this.state.message}</span>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        </div>
    }
}

export default NavBarSimple;