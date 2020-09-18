import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  const currentState = {
    1: {
      kegName: 'Weasel Whistle',
      brewery: 'Old Weasel Brewery',
      price: '$45',
      alcoholContent: 15,
      pints: 124,
      id: 1
    },
    2: {
      kegName: 'Phone Whip',
      brewery: 'What About Raho?',
      price: '$45',
      alcoholContent: 15,
      pints: 124,
      id: 2
    }
  }

  let action;
  const kegData = {
    kegName: 'Weasel Whistle',
    brewery: 'Old Weasel Brewery',
    price: '$45',
    alcoholContent: 15,
    pints: 124,
    id: 1
  };

  test('Should return default state i f there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should add new keg data to masterKegList', () => {
    const { kegName, brewery, price, alcoholContent, pints, id } = kegData;
    action = {
      type: 'ADD_KEG',
      kegName: kegName,
      brewery: brewery,
      price: price,
      alcoholContent: alcoholContent,
      pints: pints,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        kegName: kegName,
        brewery: brewery,
        price: price,
        alcoholContent: alcoholContent,
        pints: pints,
        id: id
      }
    });
  });

  test('Should delete a keg from the list', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    };

    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        kegName: 'Phone Whip',
        brewery: 'What About Raho?',
        price: '$45',
        alcoholContent: 15,
        pints: 124,
        id: 2
      }
    })
  });
});