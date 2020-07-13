import React from "react"
import { css } from "@emotion/core"
import theme from "../theme"

/** Renders a label and input of type radio
 * @param {object} props
 * @param {string} props.id - id for input that label will leverage
 * @param {string} props.name - name of the radio grouping *** this is different than checkbox
 * @param {string} props.value - value of the checkbox
 * @param {() => void} props.checked - checked handler aka what happens when checked is true
 * @param {() => void} props.onChange - change handler
 * @param {string} props.labelText
 */

const InputRadio = props => {
  return (
    <>
      <label htmlFor={props.id}>
        <input
          type="radio"
          name={props.name}
          id={props.id}
          value={props.value}
          checked={props.checked}
          onChange={props.onChange}
        ></input>
        {props.labelText}
      </label>
    </>
  )
}

export default InputRadio
