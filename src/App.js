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
      <PrimaryNav />
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
        <Switch>
          <Route path="/about">
            <PrimaryNav user={user} setuser={setUser} />
            <About />
          </Route>

          <Route path="/animals/:id" component={AnimalWrapper} />

          <Route path="/animals">
            <PrimaryNav user={user} setuser={setUser} />
            <AnimalsList />
          </Route>

          <Route path="/login">
            {/* pass the setter function that can be called if the user successfully logs in from the login screen */}
            <PrimaryNav user={user} setuser={setUser} />
            <Login user={user} setuser={setUser} />
          </Route>

          <Route path="/logout">
            {/* pass the setter function that can be called if the user successfully logs in from the login screen */}
            <PrimaryNav user={user} setuser={setUser} />
            <Logout user={user} setuser={setUser} />
          </Route>

          <Route path="/">
            <PrimaryNav user={user} setuser={setUser} />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

// make this available to other modules as an import
export default App
