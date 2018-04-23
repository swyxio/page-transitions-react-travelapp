import React, { Component } from 'react';
class App extends Component {
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

export default App;
