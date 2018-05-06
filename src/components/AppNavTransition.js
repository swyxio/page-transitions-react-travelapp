import React, { Component } from 'react';
import { users, Subscribe, State } from '../store';
import { IconBase, IconMapPin, IconCalendar } from './Icons';
import './AppNavTransition.css';
import { TimelineMax, Expo, Back, Sine } from 'gsap';

export default class AppNavTransition extends Component {
  state = {
    following: false,
    saved: false
  };
  elements = {};

  changeUserNav = ($, indexedUser) => {
    if (this.props.pathname === 'group') {
      const el = this.elements.profile0;
      el.style.transform = `translate3d(${-70 + indexedUser * 55}px, -70px, 0) scale(0.25)`;
    }
    $.changeUser(indexedUser);
  };

  toggleFollow = $ => () => {
    this.setState(
      state => ({ following: !state.following }),
      () => (this.state.following ? $.addFollower() : $.removeFollower())
    );
  };

  addPlace = () => {
    if (!this.state.saved && this.props.pathname !== 'index') {
      this.addAnimation();
      this.setState({ saved: true });
    } else {
      this.removeAnimation();
      this.setState({ saved: false });
    }
  };

  addAnimation() {
    //I love prettier, but it does make this animation code a lot longer and less legible than it could be :/
    const tl = new TimelineMax();

    tl.add('start');
    tl.to(
      '.plus',
      0.75,
      {
        rotation: -360,
        transformOrigin: '50% 50%',
        ease: Expo.easeOut
      },
      'start'
    );
    tl.to(
      '.line2',
      0.7,
      {
        scaleY: 0.5,
        x: -2,
        rotation: -45,
        transformOrigin: '50% 100%',
        ease: Expo.easeOut
      },
      'start'
    );
    tl.to(
      '.line1',
      0.7,
      {
        rotation: -50,
        x: 7,
        scaleX: 3,
        transformOrigin: '50% 100%',
        ease: Expo.easeOut
      },
      'start'
    );
    tl.fromTo(
      '.saveinfo',
      0.5,
      {
        autoAlpha: 0
      },
      {
        autoAlpha: 1,
        ease: Sine.easeOut
      },
      'start'
    );
    tl.to(
      '.saveinfo',
      0.4,
      {
        autoAlpha: 0,
        ease: Expo.easeIn
      },
      'start+=1'
    );

    return tl;
  }

  removeAnimation() {
    const tl = new TimelineMax();

    tl.add('begin');
    tl.to(
      '.plus',
      0.75,
      {
        rotation: 0,
        transformOrigin: '50% 50%',
        ease: Expo.easeOut
      },
      'begin'
    );
    tl.to(
      '.line2',
      0.7,
      {
        scaleY: 1,
        x: 0,
        rotation: 0,
        transformOrigin: '50% 100%',
        ease: Expo.easeOut
      },
      'begin'
    );
    tl.to(
      '.line1',
      0.7,
      {
        rotation: 0,
        x: 0,
        scaleX: 1,
        transformOrigin: '50% 100%',
        ease: Back.easeOut
      },
      'begin'
    );

    tl.timeScale(1.2);

    return tl;
  }
  render() {
    return (
      <Subscribe to={[State]}>
        {$ => {
          const selectedUser = $.selectedUser();
          const { page } = $.state;
          const { following } = this.state;
          return (
            <div className="app-nav-transition">
              {users.map((user, i) => {
                return (
                  <div
                    onClick={() => this.changeUserNav($, i)}
                    key={user.name}
                    className={[
                      user.name === selectedUser.name ? 'profile-photo' : 'profile-photo-secondary',
                      `profile-${i}`
                    ].join(' ')}
                    ref={element => (this.elements[`profile${i}`] = element)}
                  >
                    <div className="online" />
                    <img src={user.img} alt={user.name} />
                  </div>
                );
              })}

              <button
                onClick={this.toggleFollow($)}
                className={[following ? 'active-follow' : '', 'follow'].join(' ')}
                key="follow"
              >
                {following ? <span>&#10004; Following</span> : <span>Follow</span>}
              </button>

              <h2 key="profile-name" className="profile-name">
                {page === 'group' ? (
                  <span className="user-trip">{selectedUser.trips[0]}</span>
                ) : (
                  <span>{selectedUser.name}</span>
                )}
              </h2>

              <div onClick={this.addPlace} className="side-icon" key="sideicon">
                {page === 'index' ? (
                  <IconBase iconName="mail" iconColor="white" width="22" height="22">
                    <IconMail />
                  </IconBase>
                ) : (
                  <IconBase iconName="plus" className="plus" width="18" height="18">
                    <IconPlus />
                  </IconBase>
                )}
              </div>

              <div key="saveinfo" className="saveinfo">
                Saved!
              </div>

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
            </div>
          );
        }}
      </Subscribe>
    );
  }
}

function IconMail() {
  return (
    <path d="M20 3h-16c-1.7 0-3 1.3-3 3v12c0 1.7 1.3 3 3 3h16c1.7 0 3-1.3 3-3v-12c0-1.7-1.3-3-3-3zM4 5h16c0.4 0 0.7 0.2 0.9 0.6l-8.9 6.2-8.9-6.2c0.2-0.4 0.5-0.6 0.9-0.6zM20 19h-16c-0.6 0-1-0.4-1-1v-10.1l8.4 5.9c0.2 0.1 0.4 0.2 0.6 0.2s0.4-0.1 0.6-0.2l8.4-5.9v10.1c0 0.6-0.4 1-1 1z" />
  );
}

function IconPlus() {
  return (
    <g>
      <line className="line1" x1="0" x2="24" y1="12" y2="12" stroke="#333" strokeLinecap="round" strokeWidth="3" />
      <line className="line2" x1="12" x2="12" y1="0" y2="24" stroke="#333" strokeLinecap="round" strokeWidth="3" />
    </g>
  );
}
