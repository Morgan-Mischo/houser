import React, { Component } from "react";


class House extends Component {
  constructor() {
    super(); 
    }
  render() {
    return( 
    <div> 
      Name: {this.props.name}
      Address: {this.props.address}
      City: {this.props.city}
      State: {this.props.state}
      Zipcode: {this.props.zipcode}
      <button> Delete</button>
    </div>
    )
}
}

export default House;