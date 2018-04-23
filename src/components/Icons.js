import React, { Component } from 'react';
export class IconBase extends Component {
  render() {
    const { width = 18, height = 18, iconName = 'box', iconColor = 'currentColor', className } = this.props
    return (
      <svg xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        aria-labelledby={iconName}
        role="presentation"
        style={
          {
            display: "inline-block",
            verticalAlign: "baseline",
            marginBottom: -2
          }
        }
        className={className}
      >
        <title id={iconName} lang="en">{iconName} icon</title>
        <g fill={iconColor}>
          {this.props.children}
        </g>
      </svg>
    );
  }
}

export default IconBase;

export function IconCalendar() {
  return  <path d="M19 3h-2v-1c0-0.6-0.4-1-1-1s-1 0.4-1 1v1h-6v-1c0-0.6-0.4-1-1-1s-1 0.4-1 1v1h-2c-1.7 0-3 1.3-3 3v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-14c0-1.7-1.3-3-3-3zM5 5h2v1c0 0.6 0.4 1 1 1s1-0.4 1-1v-1h6v1c0 0.6 0.4 1 1 1s1-0.4 1-1v-1h2c0.6 0 1 0.4 1 1v3h-16v-3c0-0.6 0.4-1 1-1zM19 21h-14c-0.6 0-1-0.4-1-1v-9h16v9c0 0.6-0.4 1-1 1z"/>
}
export function IconMapPin(props) {
  return   <g>
  <path d="M12 0c-5.5 0-10 4.5-10 10 0 7.4 9.1 13.6 9.4 13.8 0.2 0.1 0.4 0.2 0.6 0.2s0.4-0.1 0.6-0.2c0.3-0.2 9.4-6.4 9.4-13.8 0-5.5-4.5-10-10-10zM12 21.8c-1.9-1.4-8-6.4-8-11.8 0-4.4 3.6-8 8-8s8 3.6 8 8c0 5.4-6.1 10.4-8 11.8z"/>
  <path d="M12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4c2.2 0 4-1.8 4-4s-1.8-4-4-4zM12 12c-1.1 0-2-0.9-2-2s0.9-2 2-2c1.1 0 2 0.9 2 2s-0.9 2-2 2z"/>
</g>
}