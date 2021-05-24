// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameRef = React.useRef()

  function handleSubmit(event) {
    event.preventDefault()
    // the preventDefault prevents a full page refresh?
    const value = event.target.elements.usernameInput.value
    //the usernameInput is coming from the id in the input tag.
    const usernameValue = usernameRef.current.value
    console.log('usernameValue', usernameValue)
    //just another way to access the input
    onSubmitUsername(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input ref={usernameRef} id="usernameInput" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
