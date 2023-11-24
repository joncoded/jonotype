import { useState } from 'react'

export default function Component() {

  const [ title, setTitle ] = useState('hello')  

  const handleClick = () => {
    setTitle('goodbye')
  }

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleClick}>change title</button>
    </div>
  )
}