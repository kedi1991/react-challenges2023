import React, { Component } from 'react'

export class ClassEvents extends Component {

    handleClick(){
        console.log("clicked the class fx")
    }

  render() {
    return (
      <button onClick={this.handleClick}>ClassEvents</button>
    )
  }
}

export default ClassEvents