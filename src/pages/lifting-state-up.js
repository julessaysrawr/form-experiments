import React, { useState } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import theme from "../theme"
import InputText from "../components/input-text"
import InputRange from "../components/input-range"
import InputCheckbox from "../components/input-checkbox"
import InputRadio from "../components/input-radio"
import InputDropdown from "../components/input-dropdown"

const LiftingState = () => {
  const [name, setName] = useState("")
  const [age, SetAge] = useState(0)
  const [shirt, setShirt] = useState(false)
  const [pants, setPants] = useState(false)
  const [shoes, setShoes] = useState(false)
  const [shipping, setShipping] = useState("")
  const [packaging, setPackaging] = useState("paper")

  const handleSubmit = event => {
    event.preventDefault()
    alert(`Nothing to see here`)
    // alert(`name: ${name}`)
    // alert(name)

    // setResults(option2)
  }

  return (
    <div>
      <h2>Lifting State Up Example</h2>
      <form onSubmit={handleSubmit}>
        <InputText
          name={name}
          onChange={event => setName(event.target.value)}
        />
        <InputRange
          label={"Age"}
          age={age}
          onChange={event => SetAge(event.target.value)}
        />
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
            <InputCheckbox
              id="shirtv2"
              value={shirt}
              checked={shirt}
              onChange={event => setShirt(event.target.checked)}
              labelText="Shirt v2"
            />
            <InputCheckbox
              id="pantsv2"
              value={pants}
              checked={pants}
              onChange={event => setPants(event.target.checked)}
              labelText="Pants v2"
            />
            <InputCheckbox
              id="shoesv2"
              value={shoes}
              checked={shoes}
              onChange={event => setShoes(event.target.checked)}
              labelText="Shoes v2"
            />
          </fieldset>
          <fieldset
            css={css`
              margin-bottom: ${theme.space[5]}px;
            `}
          >
            <legend>Choose a shipping method:</legend>
            <InputRadio
              id="overnightv2"
              name="shippingv2"
              value="overnight"
              checked={shipping === "overnight"}
              onChange={event => setShipping(event.target.value)}
              labelText="Overnight v2"
            />
            <InputRadio
              id="twodayv2"
              name="shippingv2"
              value="twoday"
              checked={shipping === "twoday"}
              onChange={event => setShipping(event.target.value)}
              labelText="Two Day v2"
            />
            <InputRadio
              id="groundv2"
              name="shippingv2"
              value="ground"
              checked={shipping === "ground"}
              onChange={event => setShipping(event.target.value)}
              labelText="Ground v2"
            />
          </fieldset>
          <InputDropdown
            id="packagingv2"
            value={packaging}
            onChange={event => setPackaging(event.target.value)}
            labelText="What type of packaging do your prefer:"
            listItems={[
              { value: "paper", displayText: "Paper Only" },
              { value: "plastic", displayText: "Plastic Okay (-$1)" },
              { value: "dontcare", displayText: "I Don't Care" },
              { value: "beeswax", displayText: "Beeswax" }
            ]}
          />
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
          <p>Age: {age}</p>
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

export default LiftingState
