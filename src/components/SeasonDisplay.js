import React from "react";
import ReactDOM from "react-dom";
import "../css/style.css";

const SeasonConfig = {
  summer: {
    text: "Its too Hot , Lets hit the beach"
  },
  winter: {
    text: "Its too Cold , Get Warm"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 10) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const Season = props => {
  const season = getSeason(props.lat, props.month);
  const { text } = SeasonConfig[season];
  console.log(text);
  return (
    <div className={`disp ${season}`}>
      <div className="content">
        <h1>Hi i am Season Display: {props.lat}</h1>
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default Season;
