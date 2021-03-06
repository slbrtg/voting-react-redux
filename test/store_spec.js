import {Map, fromJS} from 'immutable';
import {expect} from 'chai';
import makeStore from '../src/store';

describe('store', () => {
  it('should be a Redux store configured with the correct reducer', function () {
    const store = makeStore();
    expect(store.getState()).to.equal(Map());

    store.dispatch({
      type: 'SET_ENTRIES',
      entries: ['Trainspotting', '28 days later']
    });
    expect(store.getState()).to.equals(fromJS({
      entries: ['Trainspotting', '28 days later']
    }));
  });
});
