import React, { Component } from 'react'

export default class class_NguyenVanDuoc extends Component {
  constructor(props){
    super(props);
    this.state={
      fullname:"Nguyen Van Duoc",
      class:"K22CNT3"
    }
  }
  users = {
    name:"Nguyen Van Duoc",
    age: 20
  }
  // Hàm xử lí sk
  handlechange = (event)=>
  {
    this.setState({
      fullName: "Hoang Duc Vinh",
    })
  }
  render() {
    return (
      <div>
        <h2>class component duoc02</h2>
        {this.users.name} - {this.users.age}
        <hr/>
        <h3>Info: {this.props.info}</h3>
        <h3>Time: {this.props.time}</h3>
        <hr/>
        <h3>State
            FullName: {this.state.fullname}
            Class: {this.state.class}
        </h3>
        <button onclick={this.handlechange}>Change Name</button>
      </div>
    );
  }
}
