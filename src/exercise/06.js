// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // const usernameRef = React.useRef()
  const [username, setUsername] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    // the preventDefault prevents a full page refresh?
    const value = event.target.elements.usernameInput.value
    //the usernameInput is coming from the id in the input tag.
    // const usernameValue = usernameRef.current.value
    //just another way to access the input
    onSubmitUsername(value)
  }
  function handleChange(event) {
    const {value} = event.target
    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          onChange={handleChange}
          value={username}
          // ref={usernameRef}
          id="usernameInput"
          type="text"
        />
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
