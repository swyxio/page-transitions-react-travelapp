
import React from 'react'
import { IconBase, IconMapPin } from '../components/Icons'
import { Subscribe, State, places } from '../store';
import AppFooter from '../components/AppFooter.js'

import './IndexPage.css'
export default class extends React.Component {
  mapContainer = React.createRef();

  componentDidMount() {
    const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    mapboxgl.accessToken =
      'pk.eyJ1Ijoic2RyYXNuZXIiLCJhIjoiY2pmZzBqZmptMjI1eTMzbWl1bGExMHppZyJ9.diPXryPOiyMuqcV4mpNOlg';
    new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/sdrasner/cjfg0watl6rkv2sllf6hepdd5',
    });
  }

  render() {

    return (
      <Subscribe to={[State]}>
        {$ =>
        <React.Fragment>
          <main className="IndexMain">
            <div className="places" ref="places">
              {places.map(place => {
                return <div className="location" key={place.name}>
                  <img src={place.img} alt={place.name} />
                  <h2>{place.name}</h2>
                  <p><strong>Rating: {place.rating}</strong></p>
                  <p>{place.description}</p>
                  <hr />
                </div>
              })}
            </div>
            <div className="mapcontain" ref={this.mapContainer}>
              <p>
                <IconBase iconName="mappin"><IconMapPin /></IconBase>
                Checked in at Honolulu location
          </p>
            </div>
          </main>

          <AppFooter />
        </React.Fragment>
        }
      </Subscribe>
    )
  }
}