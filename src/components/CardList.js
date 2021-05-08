import React from "react";
import Card from "./Card";

const cardList = (props) => {
  return (
    <div>
      {props.robots.map((robot) => {
        return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />;
      })}
    </div>
  );
};

export default cardList;
