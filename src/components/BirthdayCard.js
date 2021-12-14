import React from "react";
import "./BirthdayCard.css";

function BirthdayCard(props) {
  const { id, name, age } = props;
  return (
    <div key={id} className="divCard">
      <img
        className="imageAvatar"
        src="https://lh3.googleusercontent.com/ogw/ADea4I4mLufB8f1Onf72yLb9qasCq2upkIiMAHWQTtrb6Q=s83-c-mo"
        alt=""
      />
      <div className="personInfo">
        <p className="personName">{name}</p>
        <p className="personAge">{age} years old</p>
      </div>
    </div>
  );
}

export default BirthdayCard;
