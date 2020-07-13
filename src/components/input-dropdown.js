import React from "react"
import { css } from "@emotion/core"
import theme from "../theme"

/** Renders a label and input of type select with options (aka dropdown)
 * @param {object} props
 * @param {string} props.id - id for input that label will leverage
 * @param {string} props.value - value of the checkbox
 * @param {() => void} props.onChange - change handler
 * @param {string} props.labelText - label text for the dropdown
 * @param {['value': string, 'displayText': string]} props.listItems - a list of the dropdown itemas
 */

const InputDropdown = props => {
  return (
    <>
      <label
        htmlFor={props.id}
        css={css`
          margin-bottom: ${theme.space[5]}px;
        `}
      >
        {props.labelText}
        <select
          id={props.id}
          name={props.id}
          value={props.value}
          onChange={props.onChange}
        >
          {props.listItems.map(item => {
            return (
              <option key={item.value} value={item.value}>
                {item.displayText}
              </option>
            )
          })}
        </select>
      </label>
    </>
  )
}

export default InputDropdown

// {
//   props.listItem.map(({ item }) => {
//     return (
//       <option key={item.value} value={item.value}>
//         {item.displayText}
//       </option>
//     )
//   })
// }

// listItems={[
//   {value: 'paper', displayText="Paper Only"},
//   {value: 'plastic', displayText="Plastic Okay (-$1)"},
//   {value: 'dontcare', displayText="I Don't Care"}
// ]}
