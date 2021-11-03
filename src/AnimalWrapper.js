import React from "react"
import AnimalDetail from "./AnimalDetail.js"

// this is used in one of the routes below for a specific animal with a specific id
// there's no nicer way to pass props to a component in a route
const AnimalWrapper = ({ match }) => {
  return (
    <>
      <AnimalDetail animalId={match.params.id} />
    </>
  )
}

export default AnimalWrapper
