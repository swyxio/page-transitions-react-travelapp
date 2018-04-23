import React, { Component } from 'react';
import { WithState } from '../store';
import './AppNavigation.css'
import { TweenMax,
  // TimelineMax,
  //  Expo,
    Sine,
    //  Back
     } from 'gsap'
import { Link } from "react-router-dom";


import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import AppStats from '../components/AppStats'
import IconBase from '../components/IconBase'
import AppMenuDrawer from '../components/AppMenuDrawer'
import AppNavTransition from './AppNavTransition'

class App extends Component {
  state = {
    saved: false,
    menuOpened: false
  }

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
      <WithState>
        {$ => {
          const firstName = fName($.selectedUser().name)
          const { page } = $.state
          const { menuOpened } = this.state
          const bkmap = {
            'index': "header-img1",
            'place': "header-img2",
            'group': "header-img3"
          }
          return (
            <header className={page}>

              {/* <transition-group name="bk" tag="div" class="bk-img">
                <div key="img1" v-if="page === 'index'" class="header-img1"></div>
                <div key="img2" v-else-if="page === 'place'" class="header-img2"></div>
                <div key="img3" v-else class="header-img3"></div>
              </transition-group> */}
              <TransitionGroup className="bk-img"
                // childFactory={child => React.cloneElement(
                //   child,
                //   {classNames: "bk", timeout: 5000}
                // )}
              >
                <CSSTransition
                  key={page}
                  timeout={{ enter: 1000, exit: 1000 }}
                  classNames={{
                    // appear: 'bk-appear',
                    // appearActive: 'bk-active-appear',
                    enter: 'bk-enter-to',
                    enterActive: 'bk-enter-active',
                    // enterDone: 'bk-enter-done',
                    exit: 'bk-leave-to',
                    exitActive: 'bk-leave-active',
                    // exitDone: 'bk-done-exit'
                  }}
                  // in={page === 'index'}
                >
                  {/* {page === 'index' && <div className={bkmap['index']} />} */}
                  <div className={bkmap[page]} />
                </CSSTransition>

              </TransitionGroup>
              {/* <div className="bk-img">
                  <div className={{
                    'index': "header-img1",
                    'place': "header-img2",
                    'group': "header-img3"
                  }[page]} />
              </div> */}

              <div className="nav-wrapper">
                <nav>
                  <ul>
                  <li><Link exact="true" to="/">{firstName}'s Home</Link></li>
                  <li><Link to="/place">{firstName}'s Places</Link></li>
                  <li><Link to="/group">{firstName}'s Group Trips</Link></li>
                  </ul>

                  <div onClick={() => this.setState({ menuOpened: !menuOpened })}>
                    <IconBase className="menu" iconName="menu" iconColor="white" width="28" height="28">
                      <IconThreeDot />
                    </IconBase>
                  </div>
                  <AppMenuDrawer firstName={firstName} menuOpened={menuOpened} />
                  <AppNavTransition />
                  {page === 'index' && <AppStats />}
                </nav>
              </div>
            </header>)
        }}

      </WithState>
    );
  }
}

export default App;

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

