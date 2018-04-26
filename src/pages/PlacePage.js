
import React from 'react'
import { places } from '../store';
import './PlacePage.css'
import AppStarRating from '../components/AppStarRating'
export default class extends React.Component {

  render() {
    const { currentUser } = this.props
    return (
      <main className="PlaceMain">
        <div className="places">
          <p className="top">{currentUser.name}'s Places</p>
          <h1>{places[0].name}</h1>
          <p><strong>Rating: {places[0].rating}</strong></p>
          <div className="stars"><AppStarRating /></div>

          <div className="main-img"></div>
          <p>{places[0].description}</p>
        </div>

        <aside className="sidebar">
          <h3>Other Trips</h3>
          {places.map(place => {
            return (
              <div className="placelocation" key={place.name}>
                <img src={place.img} alt={place.name} />
                <p className="top"><strong>{place.name}</strong></p>
                <p>{place.description}</p>
                <hr />
              </div>
            )
          })}
        </aside>

      </main>
    )
  }
}