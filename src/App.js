import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PrimaryNav from "./PrimaryNav"
import Home from "./Home"
import About from "./About"
import AnimalDetail from "./AnimalDetail"
import AnimalsList from "./AnimalsList"
import Login from "./Login"
import Logout from "./Logout"
import "./App.css"

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
            <About user={user} />
          </Route>

          {/* a route that matches a given animal id and passes that id to the AnimalWrapper component */}
          <Route path="/animals/:id" user={user} component={AnimalDetail} />

          <Route path="/animals">
            {/* we want this route to require the user be logged in, so we pass the user data in as a prop */}
            <AnimalsList user={user} />
          </Route>

          <Route path="/login">
            <Login user={user} setuser={setUser} />
          </Route>

          <Route path="/login">
            <Login user={user} setuser={setUser} />
          </Route>

          <Route path="/logout">
            <Logout user={user} setuser={setUser} />
          </Route>

          <Route path="/">
            <Home user={user} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

// make this available to other modules as an import
export default App
