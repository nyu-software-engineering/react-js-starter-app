import React, { useState, useEffect } from "react"
import axios from "axios"
import "./AnimalDetail.css"

const AnimalDetail = props => {
  // start a state varaible with a blank array
  const [data, setData] = useState([])

  // get the id of the animal this component is rendering
  const animalId = props.match.params.id

  // the following side-effect will only be called once on initial render
  useEffect(() => {
    // fetch some mock data about animals for sale
    // the id of the animal that was clicked on is passed as a part of the match field of the props
    console.log(`fetching animal id=${animalId}...`)
    axios("https://my.api.mockaroo.com/animals.json?num=1&key=d9ddfc40")
      .then(response => {
        // extract the data from the server response
        setData(response.data)
      })
      .catch(err => {
        // Mockaroo, which we're using for our Mock API, only allows 200 requests per day on the free plan
        console.log(`Sorry, buster.  No more requests allowed today!`)
        console.error(err) // the server returned an error... probably too many requests... until we pay!

        // make some backup fake data
        const backupData = [
          {
            id: 2,
            title: "Numbat",
            country: "Russia",
            price: "$2.37",
            description:
              "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
          },
        ]

        setData(backupData[0])
      })
  }, [animalId])

  const handleBuyButtonClick = e => {
    // placeholder... do something more interesting
    alert(`You clicked the button to buy the ${data.title}.`)
  }

  // inject a random placeholder image from the Lorem Picsum API
  // the mockaroo API we're using doesn't include this
  // ultimately, this data would come from the API
  const imgSrc = `https://picsum.photos/200?id=${props.animalId}` // tack on the animal ID to the query

  return (
    <div className="AnimalsList">
      <h1>{data.title}</h1>
      <section className="main-content">
        <article className="animal" key={data.id}>
          <img alt={data.title} src={imgSrc} />
          <div className="details">
            <address className="address">{data.country}</address>
            <strong className="price">{data.price}</strong>
            <p>{data.description}</p>
            <button className="buy-now" onClick={handleBuyButtonClick}>
              Buy now!
            </button>
          </div>
        </article>
      </section>
    </div>
  )
}

// make this function available to be imported into another module
export default AnimalDetail
