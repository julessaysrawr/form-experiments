import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

export default function Home() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        a {
          margin-top: 30px;
        }
      `}
    >
      <h1>Form Examples</h1>
      <Link to="/basic-example">Basic Example</Link>
      <Link to="/lifting-state-up">Lifting State Up Example</Link>
      <Link to="/reusable-handler">Reusable Handler Example</Link>
      <Link to="/quiz-prototype">Quiz Prototype</Link>
      <Link to="/react-hook-form-example">React Hooks Form Example</Link>

    </div>
  )
}
