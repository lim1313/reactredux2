import * as types from "./actionTypes";

const { INCREMENT, DECREMENT, SET_COLOR } = types;

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const setColor = color => {
  return {
    type: SET_COLOR,
    color: color,
  };
};
