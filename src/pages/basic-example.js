import React, { useState } from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import theme from "../theme"

export default function BasicExample() {
  const [name, setName] = useState("")
  // how to get an object of state?
  const [results, setResults] = useState("")
  const [shirt, setShirt] = useState(false)
  const [pants, setPants] = useState(false)
  const [shoes, setShoes] = useState(false)
  const [shipping, setShipping] = useState("")
  const [packaging, setPackaging] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    alert(`Nothing to see here`)
    // setResults(option2)
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
        <div
          css={css`
            margin: ${theme.space[4]}px 0;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: calc(${theme.space[8]}px * 1.5);
            // width: 300px;
            // height: calc(${theme.space[6]}px * 1.5);
          `}
        >
          <fieldset
            css={css`
              margin-bottom: ${theme.space[5]}px;
            `}
          >
            <legend>Pick an product</legend>
            <label htmlFor="shirt">
              <input
                type="checkbox"
                id="shirt"
                value={shirt}
                checked={shirt}
                onChange={event => setShirt(event.target.checked)}
              />
              Shirt
            </label>
            <label htmlFor="pants">
              <input
                type="checkbox"
                id="pants"
                value={pants}
                checked={pants}
                onChange={event => setPants(event.target.checked)}
              />
              Pants
            </label>
            <label htmlFor="shoes">
              <input
                type="checkbox"
                id="shoes"
                value={shoes}
                checked={shoes}
                onChange={event => setShoes(event.target.checked)}
              />
              Shoes
            </label>
          </fieldset>
          <fieldset
            css={css`
              margin-bottom: ${theme.space[5]}px;
            `}
          >
            <legend>Choose a shipping method:</legend>
            <label htmlFor="overnight">
              <input
                type="radio"
                name="shippiing"
                id="overnight"
                value="overnight"
                checked={shipping === "overnight"}
                onChange={event => setShipping(event.target.value)}
              ></input>
              Overnight
            </label>
            <label htmlFor="twoday">
              <input
                type="radio"
                name="shippiing"
                id="twoday"
                value="twoday"
                checked={shipping === "twoday"}
                onChange={event => setShipping(event.target.value)}
              ></input>
              Two Day
            </label>
            <label htmlFor="ground">
              <input
                type="radio"
                name="shippiing"
                id="ground"
                value="ground"
                checked={shipping === "ground"}
                onChange={event => setShipping(event.target.value)}
              ></input>
              Ground
            </label>
          </fieldset>
          <label htmlFor="packaging">
            What type of packaging do your prefer:
            <select
              id="packaging"
              name="packaging"
              value={packaging}
              onChange={event => setPackaging(event.target.value)}
            >
              <option value="paper">Paper Only</option>
              <option value="plastic">Plastic Okay (-$1)</option>
              <option value="dontcare">I don't care</option>
            </select>
          </label>
        </div>

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
      <div
        css={css`
          margin-top: 200px;
        `}
      >
        <h4>Results</h4>
        <div
          css={css`
            border: 1px solid black;
            width: calc(${theme.space[8]}px * 1.5);
            margin-bottom: 50px;
          `}
        >
          {/* {results} */}
          <p>name: {name}</p>
          <p>shirt: {shirt.toString()}</p>
          <p>pants: {pants.toString()}</p>
          <p>shoes: {shoes.toString()}</p>
          <p>Shipping: {shipping}</p>
          <p>Packaging: {packaging}</p>
        </div>
      </div>
      <Link to="/">Back</Link>
    </div>
  )
}
