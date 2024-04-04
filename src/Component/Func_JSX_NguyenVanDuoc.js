import React from 'react'

export default function Func_JSX_NguyenVanDuoc(props) {
  const users = {
    name:"Nguyen Van Duoc",
    age: 20
  }
  return (
    <div>
      <h2>Function Component Duoc02</h2>
      <h3>
        Wellcome to , {users.name} - {users.age}
      </h3>
      <hr/>
      <h3>Props:
        <br/> Fullname: {props.fullName}
        <br/> Age: {props.age}
      </h3>
    </div>
  )
}
