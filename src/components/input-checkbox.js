import React from "react"
import { css } from "@emotion/core"
import theme from "../theme"

/** Renders a label and input of type checkbox
 * @param {object} props
 * @param {string} props.id - id for input that label will leverage
 * @param {string} props.value - value of the checkbox
 * @param {string} props.labelText
 * @param {boolean} props.checked - is the checkbox checked
 * @param {() => void} props.onChange - change handler
 */

const InputCheckbox = props => {
  return (
    <>
      <label htmlFor={props.id}>
        <input
          type="checkbox"
          id={props.id}
          name={props.id}
          value={props.value}
          checked={props.checked}
          onChange={props.onChange}
        />
        {props.labelText}
      </label>
    </>
  )
}

export default InputCheckbox
