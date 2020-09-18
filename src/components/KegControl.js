import React from "react";
import { connect } from 'react-redux';
import EditKegForm from "./EditKegForm";
import KegDetail from "./KegDetail";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      formVisibleOnPage: false,
      selectedKeg: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { id, kegName, brewery, price, alcoholContent } = newKeg;
    const action = {
      type: 'ADD_KEG',
      id: id,
      kegName: kegName,
      brewery: brewery,
      price: price,
      alcoholContent: alcoholContent
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null
    });
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        editing: false,
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({
      selectedKeg: selectedKeg
    });
  }

  handleSellingPint = (kegToDecrement) => {
    const editedMasterKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToDecrement);
    this.setState({
      masterKegList: editedMasterKegList,
      selectedKeg: null
    });
  }

  handleEditClick = () => {
    this.setState({
      editing: true
    });
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedMasterKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      masterKegList: editedMasterKegList,
      editing: false,
      selectedKeg: null
    });
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id: id
    }
    dispatch(action);
    this.setState({
      selectedKeg: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm
        keg = {this.state.selectedKeg}
        onEditKeg = {this.handleEditingKegInList}
      />
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail
        keg = {this.state.selectedKeg}
        onClickingDelete = {this.handleDeletingKeg}
        onClickingEdit = {this.handleEditClick}
        onClickingSellPint = {this.handleSellingPint}
      />
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm
        onNewKegCreation = {this.handleAddingNewKegToList}
      />
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList
        kegList={this.state.masterKegList}
        onKegSelection={this.handleChangingSelectedKeg}
      />
      buttonText = "Add Keg";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterKegList: state
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;