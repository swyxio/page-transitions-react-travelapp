
import React from 'react'
// import { mapState } from 'vuex'
// import IconBase from '~/components/IconBase.vue'
// import IconMapPin from '~/components/IconMapPin.vue'
import { WithState, places } from '../store';
import './IndexPage.css'
export default class extends React.Component {
  render() {

    return (
      <WithState>
        {$ =>
          <main>
            <div className="places" ref="places">
              <h3>index</h3>
              <div className="location">
                {places.map(place => {
                  return <React.Fragment key={place.name}>
                    <img src={place.img} alt={place.name} />
                    <h2>{place.name}</h2>
                    <p><strong>Rating: {place.rating}</strong></p>
                    <p>{place.description}</p>
                    <hr />
                  </React.Fragment>
                })}
              </div>
            </div>
            <div className="mapcontain" ref="mapcontain">
              <p>
                {/* <icon-base icon-name="mappin"><icon-map-pin /></icon-base>  */}
                Checked in at Honolulu location
          </p>
            </div>
          </main>}

      </WithState>
    )
  }
}