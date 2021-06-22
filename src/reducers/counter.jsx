import * as types from "../actions/actionTypes";
const { INCREMENT, DECREMENT } = types;

const initalState = {
  number: 0,
};

export default function counter(state = initalState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        number: state.number + 1,
      };
    case DECREMENT:
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return state;
  }
}
