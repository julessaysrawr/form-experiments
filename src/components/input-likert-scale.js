import React from "react"
import { css } from "@emotion/core"
import theme from "../theme"

// name for 
//unique id

const InputLikertScale = () => {
  return (
    <div>
      <fieldset>
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
      </fieldset>
    </div>
  )
}

export default InputLikertScale
