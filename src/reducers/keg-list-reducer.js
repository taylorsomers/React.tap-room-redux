export default (state = {}, action) => {
  const { kegName, brewery, price, alcoholContent, pints, id } = action;
  switch (action.type) {
    case 'ADD_KEG':
      return Object.assign({}, state, {
        [id]: {
          kegName: kegName,
          brewery: brewery,
          price: price,
          alcoholContent: alcoholContent,
          pints: pints,
          id: id
        }
      });
    case 'DELETE_KEG':
      const newState = {...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
}