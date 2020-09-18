import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h1>{props.kegName}</h1>
        <h2>{props.brewery}</h2>
        <p>${props.price}</p>
        <p>{props.alcoholContent}%</p>
        <p>{props.pints} Pints Remaining</p>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  kegName: PropTypes.string,
  brewery: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.number,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;