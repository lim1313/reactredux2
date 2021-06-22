import * as types from "../actions/actionTypes";
const { SET_COLOR } = types;

const initalState = {
  color: [255, 255, 255],
};

export default function ui(state = initalState, action) {
  switch (action.type) {
    case SET_COLOR:
      return {
        ...state,
        color: action.color,
      };
    default:
      return state;
  }
}
