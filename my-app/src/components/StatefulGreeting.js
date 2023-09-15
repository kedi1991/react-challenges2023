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

    render(){
        return <div>
            <h1>{this.state.introduction} {this.props.myname}</h1>
            <button>{this.state.buttonText}</button>
        </div>
    }
}

export default StatefulGreeting;