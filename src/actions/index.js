export const addKeg = (keg) => {
  const { kegName, brewery, price, alcoholContent, pints, id } = keg;
  return {
    type: 'ADD_KEG',
    kegName: kegName,
    brewery: brewery,
    price: price,
    alcoholContent: alcoholContent,
    pints: pints,
    id: id
  }
}

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id
});