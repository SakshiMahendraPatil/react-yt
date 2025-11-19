import React from 'react'

const card = (props) => {
    console.log(props.user);
  return (
    <div>
      <div className="Card">
        <img src="https://images.unsplash.com/photo-1762949857645-ed7b3e2e68cf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>{props.user}</h1>
        <h4>sakshimahendrapatil02@gmail.com</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quibusdam.</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default card
