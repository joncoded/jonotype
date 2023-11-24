import { useState } from 'react'

export default function NewComponent() {

  const [ title, setTitle ] = useState('hello')  

  const handleChange = (event) => {    
    setTitle(event.target.value)
  }

  return (
    <div>
      <h1>{title}</h1>
      <label htmlFor="custom">Customize name: </label>
      <input type="text" name="custom" onChange={handleChange} />
    </div>
  )
}