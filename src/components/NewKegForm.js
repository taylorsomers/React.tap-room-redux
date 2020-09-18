import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";

function NewKegForm(props){
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      kegName: event.target.kegName.value,
      brewery: event.target.brewery.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      pints: event.target.pints.value,
      id: v4()
    })
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Add Keg to Keg List" />
    </React.Fragment>
  )
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;