import { Action } from '../../types/firstState';
import { EDIT_FIRST_STATE } from '../actions';

const INITIAL_STATE = {
  firstState: '',
};

function exampleReducer(state = INITIAL_STATE, action: Action) {
  const { payload } = action;
  switch (action.type) {
    case EDIT_FIRST_STATE: {
      return {
        ...state,
        firstState: payload,
      };
    }

    default:
      return state;
  }
}

export default exampleReducer;
