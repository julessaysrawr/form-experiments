import React from "react"
import { css } from "@emotion/core"
import theme from "../theme"

const InputText = (props) => {
  return (
    <div>
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
          value={props.name}
          onChange={props.onChange}
          css={css`
            width: ${theme.space[7]}px;
          `}
          required
        />
      </label>
    </div>
  )
}

export default InputText
