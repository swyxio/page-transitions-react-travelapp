import React, { Component } from 'react';
import './AppMenuDrawer.css'
import { Link } from "react-router-dom";
import { TweenMax, Sine } from 'gsap';
export default class Menu extends Component {
  menuRef = React.createRef();

  componentDidMount() {
    const menuEl = this.menuRef.current;

    TweenMax.set(menuEl, {
      opacity: 0,
      scale: 0,
      transformOrigin: '100% 0%',
    });

    TweenMax.set(menuEl.childNodes, {
      opacity: 0,
    });

    TweenMax.fromTo(
      menuEl,
      0.2,
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        ease: Sine.easeOut,
      }
    );

    TweenMax.staggerFromTo(
      menuEl.childNodes,
      0.45,
      {
        opacity: 0,
      },
      {
        delay: 0.1,
        opacity: 1,
        ease: Sine.easeOut,
      },
      0.04
    );
  }
  render() {
    const { firstName } = this.props
    return <div className="menudrawer" ref={this.menuRef}>
      <Link to="/">{firstName}'s Home</Link><br />
      <Link to="/place">{firstName}'s Places</Link><br />
      <Link to="/group">{firstName}'s Group Trips</Link>
    </div>
  }
}
