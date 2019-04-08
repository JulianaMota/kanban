import React from "react";

export default class Nav extends React.Component {
  state = {
    closed: true
  };
  cliked = e => {
    console.log("clicked");
    // let newState=true;
    // if(this.state.closed){
    //   newState=false;
    // }else{
    //   newState=true
    // }
    // this.setState({
    //   closed: newState
    // })
    this.setState({
      closed: !this.state.closed
    });
  };
  render() {
    return (
      <section className={this.state.closed ? "Nav closed" : "Nav"}>
        <button onClick={this.cliked} className="toggle">
          &#9776;
        </button>
        <h1>Nav</h1>
        <ul>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer" />
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer" />
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer" />
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer" />
          </li>
        </ul>
      </section>
    );
  }
}
