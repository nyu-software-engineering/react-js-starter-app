import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import axios from "axios"
// import logo from './logo.svg';
import "./Login.css"

const Login = props => {
  // create state variables to hold username and password
  const [status, setStatus] = useState({}) // the API will return an object indicating the login status in a success field of the response object

  // if the user's logged-in status changes, call the setuser function that was passed to this component from the PrimaryNav component.
  useEffect(() => {
    // if the login was a success, call the setuser function that was passed to this component as a prop
    if (status.success) {
      console.log(`User successfully logged in: ${status.username}`)
      props.setuser(status)
    }
  }, [status])

  const handleSubmit = async e => {
    // prevent the HTML form from actually submitting... we use React's javascript code instead
    e.preventDefault()

    try {
      // create an object with the data we want to send to the server
      const requestData = {
        username: e.target.username.value, // gets the value of the field in the submitted form with name='username'
        password: e.target.password.value, // gets the value of the field in the submitted form with name='password',
      }
      // send the request to the server api to authenticate
      const response = await axios.post(
        "https://my.api.mockaroo.com/login.json?key=d9ddfc40",
        requestData
      )
      // store the response data into the data state variable
      console.log(response.data)
      setStatus(response.data)
    } catch (err) {
      // throw an error
      throw new Error(err)
    }
  }

  // if the user is not logged in, show the login form
  if (!status.success)
    return (
      <div className="Login">
        <h1>Log in</h1>
        <section className="main-content">
          <img alt="login!" src="https://picsum.photos/200?page=home" />
          <form onSubmit={handleSubmit}>
            {
              //handle error condition
            }
            <label>Username: </label>
            <input type="text" name="username" placeholder="username" />
            <br />
            <br />
            <label>Password: </label>
            <input type="password" name="password" placeholder="password" />
            <br />
            <br />
            <input type="submit" value="Log In" />
          </form>
          <p>
            Server response (for debugging purposes):
            <br />
            <br />
            {JSON.stringify(status, null, 2)}
          </p>
        </section>
      </div>
    )
  // otherwise, if the user has successfully logged-in, redirect them to a different page
  // in this example, we simply redirect to the home page, but a real app would redirect to a page that shows content only available to logged-in users
  else return <Redirect to="/" />
}

export default Login
