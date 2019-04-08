import React from "react";
import Card from "./Card";
export default function ListContainer(props) {
  const cards = props.cards.map(card => {
    return <Card title={card.title} description={card.description} />;
  });
  return (
    <section className="ListContainer">
      <h1>{props.title}</h1>
      {cards}
    </section>
  );
}

//react events
// onClick
// onMouseenter
//onMouseOut
// onScroll
