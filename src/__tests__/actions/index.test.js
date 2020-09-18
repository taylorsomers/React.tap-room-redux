import * as actions from './../../actions';

describe('tap room actions', () => {
  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({
      kegName: 'Weasel Whistle',
      brewery: 'Old Weasel',
      price: '$45',
      alcoholContent: 15,
      pints: 124,
      id: 1
    })).toEqual({
      type: 'ADD_KEG',
      kegName: 'Weasel Whistle',
      brewery: 'Old Weasel',
      price: '$45',
      alcoholContent: 15,
      pints: 124,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });
  
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  });

});