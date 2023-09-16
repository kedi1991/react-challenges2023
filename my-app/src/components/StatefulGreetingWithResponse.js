import React from "react";

class StatefulGreetingWithRespose extends React.Component{

    constructor (props){
        super(props)
        this.state = {
            greeting:"Hello",
            buttonText:"Login",
            counter: 0
        }
    }

    manageClick = () => {
        this.setState((prevState, prevProps) => {
        

            //return the new object
            return {
                greeting: prevState.greeting === "Hello"? "Good bye": "Hello",
                buttonText: prevState.buttonText === "Login"? "Logout": "Login",
                counter: prevState.counter+=1
            }
        });
        
    
    }

     render(){
        return <div>
            <h1>{this.state.greeting}</h1>
            <button onClick={this.manageClick}>{this.state.buttonText}</button>
            <button>{this.state.counter}</button>
        </div>
     }
}

export default StatefulGreetingWithRespose;