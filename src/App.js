import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PrimaryNav from "./PrimaryNav"
import Home from "./Home"
import About from "./About"
import AnimalsList from "./AnimalsList"
import Animal from "./Animal"
import Login from "./Login"
import Logout from "./Logout"
import "./App.css"

// this is used in one of the routes below for a specific animal with a specific id
// there's no nicer way to pass props to a component in a route
const AnimalWrapper = ({ match }) => {
  return (
    <>
      <Animal animalId={match.params.id} />
    </>
  )
}

// set up routes so different URL routes load up different main components
const App = props => {
  const [user, setUser] = useState({}) // a state variable that stores the logged-in user, if any

  return (
    <div className="container">
      <Router>
        {/* pass the setter function that can be called if the user successfully logs in from the login screen */}
        <PrimaryNav user={user} setuser={setUser} />
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/animals/:id" component={AnimalWrapper} />

          <Route path="/animals">
            <AnimalsList />
          </Route>

          <Route path="/login">
            <Login user={user} setuser={setUser} />
          </Route>

          <Route path="/logout">
            <Logout user={user} setuser={setUser} />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

// make this available to other modules as an import
export default App
