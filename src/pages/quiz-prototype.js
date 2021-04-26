import React, { useState } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import theme from "../theme"

const QuizPrototype = () => {
  const [question1, setQuestion1] = useState("")
  const [question2, setQuestion2] = useState("")
  const [question3, setQuestion3] = useState(0)

  const handleSubmit = event => {
    event.preventDefault()
    alert(`Nothing to see here`)
    // alert(`name: ${name}`)
    // alert(name)

    // setResults(option2)
  }
  return (
    <div>
      <h1>Quiz Prototype</h1>
      <form
        css={css`
          display: flex;
          flex-direction: column;
          // background-color: ${theme.color.purple};
        `}
        onSubmit={handleSubmit}
      >
        <fieldset
          css={css`
            margin-bottom: ${theme.space[5]}px;
            width: 700px;
          `}
        >
          <legend>Question 1:</legend>
          <label htmlFor="question1StronglyDisagree">
            <input
              type="radio"
              name="question1"
              id="question1StronglyDisagree"
              value="1"
              checked={question1 === "1"}
              onChange={event => setQuestion1(event.target.value)}
            ></input>
            Strongly Disagree
          </label>
          <label htmlFor="question1Disagree">
            <input
              type="radio"
              name="question1"
              id="question1Disagree"
              value="2"
              checked={question1 === "2"}
              onChange={event => setQuestion1(event.target.value)}
            ></input>
            Disagree
          </label>
          <label htmlFor="question1Neutral">
            <input
              type="radio"
              name="question1"
              id="question1Neutral"
              value="3"
              checked={question1 === "3"}
              onChange={event => setQuestion1(event.target.value)}
            ></input>
            Neutral
          </label>
          <label htmlFor="question1Agree">
            <input
              type="radio"
              name="question1"
              id="question1Agree"
              value="4"
              checked={question1 === "4"}
              onChange={event => setQuestion1(event.target.value)}
            ></input>
            Agree
          </label>
          <label htmlFor="question1StronglyAgree">
            <input
              type="radio"
              name="question1"
              id="question1StronglyAgree"
              value="5"
              checked={question1 === "5"}
              onChange={event => setQuestion1(event.target.value)}
            ></input>
            Strongly Agree
          </label>
        </fieldset>
        <fieldset
          css={css`
            margin-bottom: ${theme.space[5]}px;
            width: 700px;
          `}
        >
          <legend>Question 2:</legend>
          <label htmlFor="question2StronglyDisagree">
            <input
              type="radio"
              name="question2"
              id="question2StronglyDisagree"
              value="1"
              checked={question2 === "1"}
              onChange={event => setQuestion2(event.target.value)}
            ></input>
            Strongly Disagree
          </label>
          <label htmlFor="question2Disagree">
            <input
              type="radio"
              name="question2"
              id="question2Disagree"
              value="2"
              checked={question2 === "2"}
              onChange={event => setQuestion2(event.target.value)}
            ></input>
            Disagree
          </label>
          <label htmlFor="question2Neutral">
            <input
              type="radio"
              name="question2"
              id="question2Neutral"
              value="3"
              checked={question2 === "3"}
              onChange={event => setQuestion2(event.target.value)}
            ></input>
            Neutral
          </label>
          <label htmlFor="question2Agree">
            <input
              type="radio"
              name="question2"
              id="question2Agree"
              value="4"
              checked={question2 === "4"}
              onChange={event => setQuestion2(event.target.value)}
            ></input>
            Agree
          </label>
          <label htmlFor="question2StronglyAgree">
            <input
              type="radio"
              name="question2"
              id="question2StronglyAgree"
              value="5"
              checked={question2 === "5"}
              onChange={event => setQuestion2(event.target.value)}
            ></input>
            Strongly Agree
          </label>
        </fieldset>
        <fieldset
          css={css`
            margin-bottom: ${theme.space[5]}px;
            width: 700px;
          `}
        >
          <legend>Question 3:</legend>
          <label htmlFor="question3StronglyDisagree">
            <input
              type="radio"
              name="question3"
              id="question3StronglyDisagree"
              value="1"
              checked={question3 === "1"}
              onChange={event => setQuestion3(event.target.value)}
            ></input>
            Strongly Disagree
          </label>
          <label htmlFor="question3Disagree">
            <input
              type="radio"
              name="question3"
              id="question3Disagree"
              value="2"
              checked={question3 === "2"}
              onChange={event => setQuestion3(event.target.value)}
            ></input>
            Disagree
          </label>
          <label htmlFor="question3Neutral">
            <input
              type="radio"
              name="question3"
              id="question3Neutral"
              value="3"
              checked={question3 === "3"}
              onChange={event => setQuestion3(event.target.value)}
            ></input>
            Neutral
          </label>
          <label htmlFor="question3Agree">
            <input
              type="radio"
              name="question3"
              id="question3Agree"
              value="4"
              checked={question3 === "4"}
              onChange={event => setQuestion3(event.target.value)}
            ></input>
            Agree
          </label>
          <label htmlFor="question3StronglyAgree">
            <input
              type="radio"
              name="question3"
              id="question3StronglyAgree"
              value="5"
              checked={question3 === "5"}
              onChange={event => setQuestion3(event.target.value)}
            ></input>
            Strongly Agree
          </label>
        </fieldset>
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
          <p>question1: {question1}</p>
          <p>question2: {question2}</p>
          <p>question3: {question3}</p>

          <h3>total: {parseInt(question1) + parseInt(question2) + parseInt(question3)}</h3>
        </div>
      </div>
      <Link to="/">Back</Link>
    </div>
  )
}

export default QuizPrototype
