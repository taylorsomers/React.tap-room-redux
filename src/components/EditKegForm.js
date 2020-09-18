import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditKegForm(props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({
      kegName: event.target.kegName.value,
      brewery: event.target.brewery.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      pints: event.target.pints.value,
      id: keg.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Keg"
      />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  onEditKeg: PropTypes.func
};

export default EditKegForm;