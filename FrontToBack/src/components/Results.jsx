import React from "react";

function ResultCard(props) {
    return (
        <div className="note">
          <h1>You searched: {props.searched} </h1>
          <p>Current Price: {props.price}</p>
          <p>Market Cap: {props.cap}</p>
          <p>24hr Movement: {props.movement}</p>
        </div>
      );
}

export default ResultCard;
