
import React from 'react'
import { places, users } from '../store';
import './PlacePage.css'
export default class extends React.Component {

  render() {
    return (
      <main>
        <div className="places">
          <p className="top">{users[0].name }'s Places</p>
          <h1>{ places[0].name }</h1>
          <p><strong>Rating: { places[0].rating }</strong></p>
          <div className="stars"><app-star-rating /></div>

          <div className="main-img"></div>
          <p>{ places[0].description }</p>
        </div>

        <aside className="sidebar">
          <h3>Other Trips</h3>
          {places.map(place => {
            return (
              <div className="location" key={place.name}>
                <img src={place.img} alt={place.name} />
                <p className="placetop"><strong>{ place.name }</strong></p>
                <p>{ place.description }</p>
                <hr />
              </div>
            )
          })}
        </aside>

      </main>
    )
  }
}