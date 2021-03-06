import React, { useState } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import theme from "../theme"

const ReusableHandler = () => {
  // const [name, setName] = useState("")
  // const [age, SetAge] = useState(50)
  // const [shirt, setShirt] = useState(false)
  // const [pants, setPants] = useState(false)
  // const [shoes, setShoes] = useState(false)
  // const [shipping, setShipping] = useState("")
  // const [packaging, setPackaging] = useState("paper")

  const [form, setState] = useState({
    name: "",
    age: 0,
    shirt: false,
    pants: false,
    shoes: false,
    shipping: '',
    packaging: "paper"
  })

  const handleSubmit = event => {
    event.preventDefault()
    alert(`Nothing to see here`)
    // setResults(option2)
  }

  const handleChange = event => {
    setState({
      ...form,
      [event.target.name]: (event.target.type === "checkbox" ? event.target.checked : event.target.value)
    })
  }

  return (
    <div>
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
            margin-bottom: ${theme.space[5]}px;
          `}
        >
          Name
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            css={css`
              width: ${theme.space[7]}px;
            `}
            required
          />
        </label>
        {/* range input styleing from https://css-tricks.com/value-bubbles-for-range-inputs/ */}
        <label htmlFor="age">
          Age
          <input
            type="range"
            min="0"
            max="120"
            value={form.age}
            id="age"
            name="age"
            onChange={handleChange}
            css={css`
              cursor: pointer;
              width: 200px;
              height: 10px;
              background: ${theme.color.greyMedium};
              border-radius: 5px;
              appearance: none;
              outline: none;
              margin: 0 10px;
              padding: 0;

              &::-webkit-slider-thumb {
                -webkit-appearance: none;
                width: 20px;
                height: 20px;
                background: ${theme.color.purpleLight};
                border-radius: 50%;
                transition: background 0.15s ease-in-out;

                &:hover {
                  background: ${theme.color.purpleDark};
                }
              }
              &:active::-webkit-slider-thumb {
                background: ${theme.color.purpleDark};
              }
              &::-moz-range-thumb {
                width: 20px;
                height: 20px;
                border: 0;
                background: ${theme.color.purpleLight};
                border-radius: 50%;
                transition: background 0.15s ease-in-out;

                &:hover {
                  background: ${theme.color.purpleDark};
                }
              }
              &:active::-moz-range-thumb {
                background: ${theme.color.purpleDark};
              }

              // Firefox Overrides
              &::-moz-range-track {
                background: $range-track-color;
                border: 0;
              }
              ::-moz-focus-inner,
              ::-moz-focus-outer {
                border: 0;
              }
            `}
          ></input>
          <span
            css={css`
              display: inline-block;
              position: relative;
              text-align: center;
              background-color: ${theme.color.purple};
              color: ${theme.color.white};
              line-height: 20px;
              padding: 5px 10px;
              border-radius: 3px;
              margin-left: ${theme.space[1]}px;

              &:after {
                position: absolute;
                top: 8px;
                left: -7px;
                width: 0;
                height: 0;
                border-top: 7px solid transparent;
                border-right: 7px solid ${theme.color.purple};
                border-bottom: 7px solid transparent;
                content: "";
              }
            `}
          >
            {form.age}
          </span>
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
                name="shirt"
                value={form.shirt}
                checked={form.shirt}
                onChange={handleChange}
              />
              Shirt
            </label>
            <label htmlFor="pants">
              <input
                type="checkbox"
                id="pants"
                name="pants"
                value={form.pants}
                checked={form.pants}
                onChange={handleChange}
              />
              Pants
            </label>
            <label htmlFor="shoes">
              <input
                type="checkbox"
                id="shoes"
                name="shoes"
                value={form.shoes}
                checked={form.shoes}
                onChange={handleChange}
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
                name="shipping"
                id="overnight"
                value="overnight"
                checked={form.shipping === "overnight"}
                onChange={handleChange}
              ></input>
              Overnight
            </label>
            <label htmlFor="twoday">
              <input
                type="radio"
                name="shipping"
                id="twoday"
                value="twoday"
                checked={form.shipping === "twoday"}
                onChange={handleChange}
              ></input>
              Two Day
            </label>
            <label htmlFor="ground">
              <input
                type="radio"
                name="shipping"
                id="ground"
                value="ground"
                checked={form.shipping === "ground"}
                onChange={handleChange}
              ></input>
              Ground
            </label>
          </fieldset>
          <label
            htmlFor="packaging"
            css={css`
              margin-bottom: ${theme.space[5]}px;
            `}
          >
            What type of packaging do your prefer:
            <select
              id="packaging"
              name="packaging"
              value={form.packaging}
              onChange={handleChange}
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
          <p>name: {form.name}</p>
          <p>Age: {form.age}</p>
          <p>shirt: {form.shirt.toString()}</p>
          <p>pants: {form.pants.toString()}</p>
          <p>shoes: {form.shoes.toString()}</p>
          <p>Shipping: {form.shipping}</p>
          <p>Packaging: {form.packaging}</p>
        </div>
      </div>
      <Link to="/">Back</Link>
    </div>
  )
}

export default ReusableHandler
