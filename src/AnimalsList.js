import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import logo from './logo.svg';
import './AnimalsList.css'
import AnimalPreview from './AnimalPreview'

const AnimalsList = (props) => {
  // start a state varaible with a blank array
  const [data, setData] = useState([])

  // the following side-effect will be called once upon initial render
  useEffect(() => {
    // fetch some mock data about animals for sale
    console.log('fetching 10 random animals...')
    axios('https://my.api.mockaroo.com/animals.json?num=10&key=d9ddfc40')
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
            id: 1,
            title: 'Paddy heron (unidentified)',
            country: 'Brazil',
            price: '$10.51',
            description:
              'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
          },
          {
            id: 2,
            title: 'Numbat',
            country: 'Russia',
            price: '$2.37',
            description:
              'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
          },
        ]

        setData(backupData)
      })
  }, []) // only run it once!

  return (
    <div className="AnimalsList">
      <h1>Animals For Sale</h1>
      <section className="main-content">
        <img
          alt="animals for sale"
          src="https://picsum.photos/200?page=animals"
        />
        <p>
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant
          winter purslane fennel azuki bean earthnut pea sierra leone bologi
          leek soko chicory celtuce parsley jícama salsify.
        </p>
      </section>
      <section className="animals">
        {data.map((item) => (
          <AnimalPreview key={item.id} details={item} />
        ))}
      </section>
    </div>
  )
}

export default AnimalsList
