import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrimaryNav from './PrimaryNav';
import Home from './Home';
import About from './About';
import AnimalsList from './AnimalsList';
import Animal from './Animal';
import './App.css';

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
const App = (props) => {
  return (
    <div className="container">
        <Router>
            <Switch>

                <Route path="/about">
                    <PrimaryNav />
                    <About />
                </Route>

                <Route path="/animals/:id" component={AnimalWrapper} />

                <Route path="/animals">
                    <PrimaryNav />
                    <AnimalsList />
                </Route>

                <Route path="/">
                    <PrimaryNav />
                    <Home />
                </Route>

            </Switch>
        </Router>
    </div>
  );
}

// make this available to other modules as an import
export default App;