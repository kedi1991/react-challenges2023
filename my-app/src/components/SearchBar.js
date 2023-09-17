import React, { Component } from 'react'
import names from '../names'

export class SearchBar extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        names: names
      }
    }

    //fucntion to handle the change
    handleChange = (e) => {
      const textValue = e.target.value.toLowerCase();
      console.log(textValue)

      const filteredNames = names.filter( name => {
        return name.toLowerCase().includes(textValue)
      })
      console.log(filteredNames)
      this.setState({
        names: filteredNames
      })
    }
     
    

  render() {
    return (
      <div>
        <h1>Name Search</h1>
        <p>Matching names found: {this.state.names.length}</p>
        <form>
            <input type='text' placeholder='Search names ...' onChange={(e) => this.handleChange(e)}></input>
            <div>
              {this.state.names.map(
                (name) => <p key={name}>{name}</p>
              )}
            </div>
        </form>
      </div>
    )
  }
}

export default SearchBar