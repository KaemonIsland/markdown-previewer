import { createStore } from 'redux';
import { defaultState } from './defaultState';

let MARKDOWN = 'MARKDOWN';

let markDownReducer = (state = defaultState, action) => {
  switch (action.type) {
    case MARKDOWN:
      return { markDown: action.text }
    default:
      return state;
  }
}

let getMarkDown = text => {
  return {
    type: MARKDOWN,
    text
  }
}

let store = createStore(markDownReducer);

export { store, getMarkDown };