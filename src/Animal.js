import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Animal.css'

const Animal = (props) => {
  // console.log(props); // a specific animal id should be passed as a prop

  // start a state varaible with a blank array
  const [data, setData] = useState([])

  // the following side-effect will only be called once on initial render
  useEffect(() => {
    // fetch some mock data about animals for sale
    console.log(`fetching animal id=${props.animalId}...`)
    axios('https://my.api.mockaroo.com/animals.json?num=1&key=d9ddfc40')
      .then((response) => {
        // extract the data from the server response
        setData(response.data)
      })
      .catch((err) => {
        // Mockaroo, which we're using for our Mock API, only allows 200 requests per day on the free plan
        console.log(`Sorry, buster.  No more requests allowed today!`)
        console.error(err) // the server returned an error... probably too many requests... until we pay!

        // make some backup fake data
        const backupData = [
          {
            id: 2,
            title: 'Numbat',
            country: 'Russia',
            price: '$2.37',
            description:
              'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
          },
        ]

        setData(backupData[0])
      })
  }, [props.animalId])

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
          <div class="details">
            <address class="address">{data.country}</address>
            <strong class="price">{data.price}</strong>
            <p>{data.description}</p>
            <button class="buy-now">Buy now!</button>
          </div>
        </article>
      </section>
    </div>
  )
}

// make this function available to be imported into another module
export default Animal
