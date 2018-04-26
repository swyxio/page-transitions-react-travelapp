import React, { Component } from 'react';
import { Subscribe, State } from '../store';
import './AppNavigation.css'
import {
  TweenMax,
  Sine,
} from 'gsap'
import { NavLink } from "react-router-dom";


import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import AppStats from '../components/AppStats'
import { IconBase } from '../components/Icons'
import AppMenuDrawer from '../components/AppMenuDrawer'
import AppNavTransition from './AppNavTransition'

export default class Header extends Component {
  state = {
    saved: false,
    menuOpened: false
  }

  toggleMenu = () => {
    this.setState(
      state => ({ menuOpened: !state.menuOpened }),
      () => {
        if (this.state.menuOpened) {
          this.openMenu();
        } else {
          this.closeMenu();
        }
      }
    );
  };
  openMenu() {
    TweenMax.to('.first', 0.2, {
      x: 18,
      ease: Sine.easeOut
    })
    TweenMax.to('.last', 0.2, {
      x: -18,
      ease: Sine.easeOut
    })
    TweenMax.staggerTo(
      '.first, .middle, .last',
      0.2,
      {
        fill: '#7eebe6',
        ease: Sine.easeOut
      },
      0.04
    )
  }
  closeMenu() {
    TweenMax.to('.first', 0.2, {
      x: 0,
      ease: Sine.easeIn
    })
    TweenMax.to('.last', 0.2, {
      x: 0,
      ease: Sine.easeIn
    })
    TweenMax.to('.first, .middle, .last', 0.2, {
      fill: '#fff'
    })
  }
  render() {
    return (
      <Subscribe to={[State]}>
        {$ => {
          const selectedUser = $.selectedUser()
          const firstName = fName(selectedUser.name)
          const { page } = $.state
          const { menuOpened } = this.state
          const bkmap = {
            'index': "header-img1",
            'place': "header-img2",
            'group': "header-img3"
          }

          return (
            <header className={page}>
              <TransitionGroup className="bk-img">
                <CSSTransition key={page} timeout={400} classNames="bk">
                  <div className={bkmap[page]} />
                </CSSTransition>
              </TransitionGroup>

              <div className="nav-wrapper">
                <nav>
                  <ul>
                    <li><NavLink activeClassName="nuxt-link-active" exact to="/">{firstName}'s Home</NavLink></li>
                    <li><NavLink activeClassName="nuxt-link-active" to="/place">{firstName}'s Places</NavLink></li>
                    <li><NavLink activeClassName="nuxt-link-active" to="/group">{firstName}'s Group Trips</NavLink></li>
                  </ul>

                  <div onClick={this.toggleMenu}>
                    <IconBase className="menu" iconName="menu" iconColor="white" width="28" height="28">
                      <IconThreeDot />
                    </IconBase>
                  </div>
                  {menuOpened && <AppMenuDrawer firstName={firstName} menuOpened={menuOpened} />}
                  <AppNavTransition pathname={page} />
                  {page === 'index' && <AppStats selectedUser={selectedUser} />}
                </nav>
              </div>
            </header>)
        }}
      </Subscribe>
    );
  }
}



function fName(input) {
  var lastIndex = input.lastIndexOf(' ')
  return input.substring(0, lastIndex)
}


function IconThreeDot() {
  return <g>
    <circle className="first" cx="3" cy="12" r="3" />
    <circle className="middle" cx="12" cy="12" r="3" />
    <circle className="last" cx="21" cy="12" r="3" />
  </g>
}

