import React, { useState } from "react"

export default function Home() {
  const [name, setName] = useState("")
  const [results, setResults] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // alert(`Name is ${name}`)
    setResults(name)
  }

  return (
    <div>
      {console.log('results: ', results)}
      <h1>Basic Form Example</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </label>
        <input type="submit" value="Submit 🚀"/>
      </form>
      <div>
        <h4>Results</h4>
        <div>{results}</div>
      </div>
    </div>
  )
}
