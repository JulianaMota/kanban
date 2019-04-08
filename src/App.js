import React from "react";
import Nav from "./Nav";
import Main from "./Main";
export default class App extends React.Component {
  state = {
    cards: [
      {
        id: 7684325, //Something random
        title: "Hi mom", //or whatever
        status: "Todo", //or Doing or Done,
        description: "bla, bla"
      },
      {
        id: 7684326, //Something random
        title: "Hi dad", //or whatever
        status: "Doing", //or Doing or Done,
        description: "bla, bla again"
      },
      {
        id: 7684326, //Something random
        title: "Hi ju", //or whatever
        status: "Done", //or Doing or Done,
        description: "bla, bla again"
      },
      {
        id: 7684326, //Something random
        title: "Hi ju", //or whatever
        status: "Done", //or Doing or Done,
        description: "bla, bla again"
      },
      {
        id: 7684326, //Something random
        title: "Hi ju", //or whatever
        status: "Todo", //or Doing or Done,
        description: "bla, bla again"
      }
    ]
  };
  addCard = e => {
    console.log("addcard");
    this.setState({});
  };
  render() {
    return (
      <section className="App">
        <h1>App</h1>
        <button onClick={this.addCard}>Add a Card</button>
        <Nav />
        <Main cards={this.state.cards} />
      </section>
    );
  }
}
