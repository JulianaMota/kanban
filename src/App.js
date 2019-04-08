import React from "react";
import Nav from "./Nav";
import Main from "./Main";
import { ReactComponent } from "*.svg";

export default class App extends React.Component {
  state ={
    cards: [
      {
        id: 76854789,
         
      }
    ]
  }

};
render() {
  return (
    <section className="App">
      <h1>App</h1>
      <Nav />
      <Main />
    </section>
  );
}
}
