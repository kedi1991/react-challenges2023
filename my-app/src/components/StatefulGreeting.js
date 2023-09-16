import React from "react";

class StatefulGreeting extends React.Component{

//create a constructor
constructor(props){

    super(props)
    this.state = {
        introduction: "Hello!",
        buttonText: "Exit!"
    }
}

    handleClick(){
        //add a call back function to prevent async nature of the setState
        this.setState({
            introduction: "Goodbye!",
            buttonText: "Login"
        }, () => {
            console.log("button clicked after change of state");

        });  
        console.log("button clicked");
    }

    render(){
        return <div>
            <h1>{this.state.introduction} {this.props.myname}</h1>
            <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
        </div>
    }
}

export default StatefulGreeting;