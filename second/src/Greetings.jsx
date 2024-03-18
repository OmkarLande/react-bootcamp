import React from 'react'

function Greetings(props) {
    const isLoggedIn = false;
  return (
    <div>
        {isLoggedIn ? <h1>Welcome {props.name}</h1> : <h1>Please log in first</h1>}
    </div>
  )
}

export default Greetings