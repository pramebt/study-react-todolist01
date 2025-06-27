import {React, useState } from 'react'

const TestState = () => {
    const [number, setNumber] = useState(0);
    const handleClick = () => {
        setNumber(number + 1);
    }
  return (
    <div>
        <h1>{number}</h1>
        <button type="button" onClick={handleClick}>Click me ?</button>
    </div>
  )
}

export default TestState