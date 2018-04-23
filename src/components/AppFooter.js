import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <footer style={
        {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          background: "black",
          color: "white",
          textAlign: "center",
          letterSpacing: "0.03em",
          marginTop: "30px",
          width: "100%",
          height: "50px",
        }
      }>
        React Clone Made by
        <A  href="https://twitter.com/swyx">swyx</A>.
        Original Made by
        <A href="https://twitter.com/sarah_edo" >sarah_edo</A>.
        This project is open source, visit <A href="https://github.com/sdras/page-transitions-travelapp" >the repo.</A>

      </footer>
    );
  }
}

function A(props) {
  return <a style={{paddingLeft: 6}} href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>
}
export default App;
