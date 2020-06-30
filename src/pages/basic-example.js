import React, { useState } from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import theme from "../theme"

export default function BasicExample() {
  const [name, setName] = useState("")
  const [results, setResults] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    // alert(`Name is ${name}`)
    setResults(name)
  }

  return (
    <div>
      {console.log("results: ", results)}
      <h1>Basic Form</h1>
      <form
        css={css`
          display: flex;
          flex-direction: column;
          // background-color: ${theme.color.purple};
        `}
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="name"
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          Name
          <input
            type="text"
            id="name"
            value={name}
            onChange={event => setName(event.target.value)}
            css={css`
              width: ${theme.space[7]}px;
            `}
          />
        </label>
        <input
          type="submit"
          value="Submit 🚀"
          css={css`
            width: ${theme.space[7]}px;
            margin-top: ${theme.space[4]}px;
            padding: ${theme.space[2]}px ${theme.space[3]}px;
          `}
        />
      </form>
      <div>
        <h4>Results</h4>
        <div
          css={css`
            border: 1px solid black;
            height: 200px;
            width: 300px;
            margin-bottom: 50px;
          `}
        >
          {results}
        </div>
      </div>
      <Link to="/">Back</Link>
    </div>
  )
}
