import React, { Component } from "react";
import {Link} from 'react-router-dom'; 

class Wizard extends Component {
  constructor() {
    super(); 
    this.state = {
      name: '', 
      address: '', 
      city: '', 
      state: '', 
      zipcode: ''
    }
  }

  handleChange = event => {
    const { value, name } = event.target; 
    this.setState({
      [name] : value
    }); 
  }; 
  render() {
    const { name, address, city, state, zipcode } = this.state; 
    return <div> Wizard 
      <Link to="/">
        <button>Cancel</button>
      </Link>
      <input
      name='name'
      type='text'
      placeholder='name'
      onChange={this.handleChange}
      value={name}
      />
      <input
      name='address'
      type='text'
      placeholder='address'
      onChange={this.handleChange}
      value={address}
      />
      <input
      name='city'
      type='text'
      placeholder='city'
      onChange={this.handleChange}
      value={city}
      />
      <input
      name='state'
      type='text'
      placeholder='state'
      onChange={this.handleChange}
      value={state}
      />
      <input
      name='zipcode'
      type='text'
      placeholder='zipcode'
      onChange={this.handleChange}
      value={zipcode}
      />
    </div>;
  }
}

export default Wizard;