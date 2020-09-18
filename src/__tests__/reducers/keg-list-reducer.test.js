import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

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
});