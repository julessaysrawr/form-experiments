import React from "react"
import { css } from "@emotion/core"
import theme from "../theme"

const InputRange = props => {
  return (
    <div>
      {/* range input styleing from https://css-tricks.com/value-bubbles-for-range-inputs/ */}
      <label>
        <p
          css={css`
            margin-bottom: 0;
          `}
        >
          {props.label}
        </p>
        <input
          type="range"
          min="0"
          max="120"
          value={props.age}
          id="age"
          onChange={props.onChange}
          css={css`
            cursor: pointer;
            width: 200px;
            height: 10px;
            background: ${theme.color.greyMedium};
            border-radius: 5px;
            appearance: none;
            outline: none;
            // margin: 0 10px;
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
          {props.age}
        </span>
      </label>
    </div>
  )
}

export default InputRange
