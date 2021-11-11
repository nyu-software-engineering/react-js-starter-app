import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
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
        <Routes>
          <Route path="/about" element={<About user={user} />} />

          {/* a route that matches a given animal id and passes that id to the AnimalWrapper component */}

          {/* we want this route to require the user be logged in, so we pass the user data in as a prop */}
          <Route path="/animals" element={<AnimalsList user={user} />} />
          <Route
            path="/animals/:animalId"
            element={<AnimalDetail user={user} />}
          />

          <Route
            path="/login"
            element={<Login user={user} setuser={setUser} />}
          />

          <Route
            path="/login"
            element={<Login user={user} setuser={setUser} />}
          />

          <Route
            path="/logout"
            element={<Logout user={user} setuser={setUser} />}
          />

          <Route path="/" element={<Home user={user} />} />
        </Routes>
      </Router>
    </div>
  )
}

// make this available to other modules as an import
export default App
