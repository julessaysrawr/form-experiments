import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import theme from "../theme"
import { useForm } from "react-hook-form"

const ReactHooksFormDemo = () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    console.log("data: ", data)
  }

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

  const validateUsername = async value => {
    await sleep(1000)
    if (value === "maru") return true

    return false
  }

  return (
    <div>
      <h1>React Hooks Form Demo</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        css={css`
          display: flex;
          flex-direction: column;
          // width: 70%;
          width: ${theme.space[7]}px;
          // background-color: ${theme.color.purple};
        `}
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
          <input type="text" id="name" name="name" ref={register({ required: true })}></input>
          {/* name attribute of input element is used by javascript or to reference form data when submitting a form */}
          {/* Only fields with name attribute will be submitted  https://www.w3schools.com/tags/att_input_name.asp */}
          {/* react-hhok-form expects each input to have a unique name */}
          {errors.name?.type === "required" && (
            <span>Name is a required field</span>
          )}
        </label>

        <label
          htmlFor="age"
          css={css`
            display: flex;
            flex-direction: column;
            margin-bottom: ${theme.space[5]}px;
          `}
        >
          Age
          <input
            type="number"
            id="age"
            name="age"
            ref={register({ required: true, minLength: 2, min: 18, max: 99 })}
          ></input>
          {/* ---------- checkout this example of error component ---------- */}
          {/* https://codesandbox.io/s/tutorial-base-done-g2n24?file=/src/errorMessage.js */}
          {errors.age?.type === "required" && (
            <span>Age is a required field</span>
          )}
          {errors.age?.type === "minLength" && (
            <span>Age must be two digits. For example: 09 </span>
          )}
          {errors.age?.type === "min" && (
            <span>You must be at least 18 years old </span>
          )}
          {errors.age?.type === "max" && (
            <span>You must be younger than 99 years old </span>
          )}
        </label>

        <label
          htmlFor="phone"
          css={css`
            display: flex;
            flex-direction: column;
            margin-bottom: ${theme.space[5]}px;
          `}
        >
          Phone
          <input
            id="phone"
            type="tel"
            name="phone"
            // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            ref={register({
              pattern: {
                value: /^\d{3}-\d{3}-\d{4}$/,
                message: "Please enter phone number in 999-999-9999 format",
              },
            })}
          />
          {errors.phone?.type === "pattern" && (
            <span>{errors.phone?.message}</span>
          )}
        </label>

        <label
          htmlFor="state"
          css={css`
            display: flex;
            flex-direction: column;
            margin-bottom: ${theme.space[5]}px;
          `}
        >
          State
          <select name="state" id="state" ref={register}>
            <option value="" value="">
              Select a State
            </option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </label>

        <label
          htmlFor="zipcode"
          css={css`
            display: flex;
            flex-direction: column;
            margin-bottom: ${theme.space[5]}px;
          `}
        >
          Zip Code
          <input
            id="zipcode"
            name="zipcode"
            ref={register({ required: true, minLength: 5 })}
          />
          {errors.zipcode?.type === "required" && (
            <span>Zip code is a required field</span>
          )}
          {errors.zipcode?.type === "minLength" && (
            <span>You must enter at least five digits for zip code</span>
          )}
        </label>

        <label
          htmlFor="income"
          css={css`
            display: flex;
            flex-direction: column;
            margin-bottom: ${theme.space[5]}px;
          `}
        >
          Household Income
          <input name="income" id="income" ref={register({pattern: {
            value: /^[0-9]*$/,
            message: "Only number characters are allowed"
          }})} />
          {errors.income?.type === "pattern" && <span>{errors.income?.message}</span>}
        </label>

        <label
          htmlFor="username"
          css={css`
            display: flex;
            flex-direction: column;
            margin-bottom: ${theme.space[5]}px;
          `}
        >
          Username
          <input
            id="username"
            name="username"
            type="text"
            ref={register({ required: true, validate: validateUsername })}
          />
          {errors.username?.type === "required" && (
            <span>Username is required</span>
          )}
          {errors.username?.type === "validate" && (
            <span>Username is already taken</span>
          )}
          {/* {errors.username && <span>Username is already taken</span>} */}
        </label>

        <input
          type="submit"
          value="Submit 🚀"
          css={css`
            width: ${theme.space[7]}px;
            margin-top: ${theme.space[4]}px;
            margin-bottom: ${theme.space[4]}px;
            padding: ${theme.space[2]}px ${theme.space[3]}px;
          `}
        />
      </form>
      <Link to="/">Back</Link>
    </div>
  )
}

export default ReactHooksFormDemo
