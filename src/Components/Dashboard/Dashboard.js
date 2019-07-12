
import React, { Component } from 'react'
import House from '../House/House'; 
import { Link } from "react-router-dom";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super(); 
    this.state = {
      houses: [], 
    }
    this.componentDidMount=this.componentDidMount.bind(this); 
  }
  componentDidMount() {
    axios.get("/api/houses").then(res => {
      console.log(res.data);
      this.setState({
        houses: res.data
      });
    });
  }

  render() {
    let { houses } = this.state; 
    return <div> Dashboard  {houses.map(house => {
      return (
        < House />
      )
    })}
        <Link to='/wizard'>
          <button>Add New Property</button>
        </Link>
    </div>;
  }
}

export default Dashboard;
