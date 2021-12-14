import React, { useState } from "react";
import "./Card.css";
import BirthCard from "./BirthdayCard.js";
import { data } from "../Data.js";

function Card() {
  const ClearAll = () => {
    setPeople([]);
    console.log(people);
  };
  const [people, setPeople] = useState(data);
  return (
    <div className="Card">
      <p>{people.length} birthdays today</p>
      {people.map((person) => {
        return (
          <BirthCard key={person.id} name={person.name} age={person.age} />
        );
      })}
      <button className="clearButton" onClick={() => ClearAll()}>
        Clear All
      </button>
    </div>
  );
}

export default Card;
