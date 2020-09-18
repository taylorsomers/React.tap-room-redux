import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props){
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="kegName"
          placeholder="Keg Name"
        />
        <input
          type="text"
          name="brewery"
          placeholder="Brewery"
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
        />
        <input
          type="number"
          name="alcoholContent"
          placeholder="Alcohol Content (Percent)"
        />
        <input
          type="number"
          name="pints"
          max="124"
          placeholder="Number of Pints in Keg"
        />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  buttonText: PropTypes.string,
  formSubmissionHandler: PropTypes.func
};

export default ReusableForm;