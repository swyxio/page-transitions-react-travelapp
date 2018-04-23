import React, { Component } from 'react';
import { users, WithState } from '../store';
import IconBase from './IconBase'
import IconMapPin from './IconMapPin'
import './AppNavTransition.css'

class App extends Component {
  refArray = []
  changeUserNav = (page, indexedUser) => {
    if (page === 'group') {
      const el = this.refArray[0]
      el.style.transform = `translate3d(${-70 +
        indexedUser * 55}px, -70px, 0) scale(0.25)`
    }
    this.forceUpdate()
  }
  render() {
    return (
      <WithState>
        {$ => {
          const selectedUser = $.selectedUser()
          const {page, indexedUser} = $.state
          const following = false

      // <transition-group tag="div">
      return <div>
        {users.map((user, i) => {
          return <div
            onClick={() => this.changeUserNav(page, i) || $.changeUser(i)}
            key={user.name}
            className={[user.name === selectedUser.name ? 'profile-photo' : 'profile-photo-secondary', `profile-${i}`].join(' ')}
            ref={el => this.refArray.push(el)} // `profile${i}`
          >
            <div className="online"></div>
            <img src={user.img} alt={user.name} />
          </div>
        })}

        <button onClick={()=> alert('toggleFollow not implemented')} className={[following ?  'active-follow' : '', 'follow'].join(' ')} key="follow">
          {following ?
            <span >&#10004; Following</span> :
            <span >Follow</span>
          }
        </button>

        <h2 key="profile-name" className="profile-name">
          {page === 'group' ?
            <span className="user-trip">{selectedUser.trips[0]}</span> :
            <span>{selectedUser.name}</span>
          }
        </h2>

        <div onClick={()=> alert('addPlace not implemented')} className="side-icon" key="sideicon">
          {page === 'index' ?
            <IconBase iconName="mail" iconColor="white" width="22" height="22">
              <IconMail />
            </IconBase> :
            <IconBase iconName="plus" className="plus" width="18" height="18">
              <IconPlus />
            </IconBase>
          }
        </div>

        <div key="saveinfo" className="saveinfo">Saved!</div>

        <aside className="navAside" key="aside">
          <p className="map-pin">
            <IconBase iconName="map pin" width="18" height="18">
              <IconMapPin />
            </IconBase>
            United States
          </p>

          <p className="calendar">
            <IconBase iconName="calendar" width="18" height="18">
              <IconCalendar />
            </IconBase>
            {selectedUser.days} days traveling
          </p>
        </aside>
        {/* </transition-group > */}
      </div>
        }}

      </WithState>
    );
  }
}

export default App;

function IconMail() {
  return <path d="M20 3h-16c-1.7 0-3 1.3-3 3v12c0 1.7 1.3 3 3 3h16c1.7 0 3-1.3 3-3v-12c0-1.7-1.3-3-3-3zM4 5h16c0.4 0 0.7 0.2 0.9 0.6l-8.9 6.2-8.9-6.2c0.2-0.4 0.5-0.6 0.9-0.6zM20 19h-16c-0.6 0-1-0.4-1-1v-10.1l8.4 5.9c0.2 0.1 0.4 0.2 0.6 0.2s0.4-0.1 0.6-0.2l8.4-5.9v10.1c0 0.6-0.4 1-1 1z"/>
}

function IconPlus() {
  return <g>
    <line className="line1" x1="0" x2="24" y1="12" y2="12" stroke="#333" strokeLinecap="round" strokeWidth="3" />
    <line className="line2" x1="12" x2="12" y1="0" y2="24" stroke="#333" strokeLinecap="round" strokeWidth="3" />
  </g>
}

export function IconCalendar() {
  return  <path d="M19 3h-2v-1c0-0.6-0.4-1-1-1s-1 0.4-1 1v1h-6v-1c0-0.6-0.4-1-1-1s-1 0.4-1 1v1h-2c-1.7 0-3 1.3-3 3v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-14c0-1.7-1.3-3-3-3zM5 5h2v1c0 0.6 0.4 1 1 1s1-0.4 1-1v-1h6v1c0 0.6 0.4 1 1 1s1-0.4 1-1v-1h2c0.6 0 1 0.4 1 1v3h-16v-3c0-0.6 0.4-1 1-1zM19 21h-14c-0.6 0-1-0.4-1-1v-9h16v9c0 0.6-0.4 1-1 1z"/>
}