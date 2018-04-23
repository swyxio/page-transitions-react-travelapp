
import React from 'react'
import {IconBase, IconMapPin} from '../components/Icons'
import { WithState, places } from '../store';
import './IndexPage.css'
export default class extends React.Component {
  render() {

    return (
      <WithState>
        {$ =>
          <main>
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
            <div className="mapcontain" ref="mapcontain">
              <p>
                <IconBase iconName="mappin"><IconMapPin /></IconBase>
                Checked in at Honolulu location
          </p>
            </div>
          </main>}

      </WithState>
    )
  }
}