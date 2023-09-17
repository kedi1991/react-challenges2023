import React, { Component } from 'react'
import names from '../names'

export class SearchBar extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        names: names
      }
    }

  render() {
    return (
      <div>
        <h1>Name Search</h1>
        <p>Matching names found: {this.state.names.length}</p>
        <form>
            <input type='text' placeholder='Search names ...'></input>
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