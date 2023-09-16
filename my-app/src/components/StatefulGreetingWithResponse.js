import React from "react";

class StatefulGreetingWithRespose extends React.Component{

    constructor (props){
        super(props)
        this.state = {
            greeting:"Hello",
            buttonText:"Login"
        }
    }

    manageClick = () => {
        this.setState({
            greeting: this.state.greeting === "Bye!"? "Hello": "Bye!",
            buttonText: this.state.buttonText === "Logout"? "Login": "Logout"
        }, () => {
            console.log("you just clicked me......")

        })

    }

     render(){
        return <div>
            <h1>{this.state.greeting}</h1>
            <button onClick={this.manageClick}>{this.state.buttonText}</button>
        </div>
     }
}

export default StatefulGreetingWithRespose;