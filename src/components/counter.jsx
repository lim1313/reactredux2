import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const Counter = ({ number, color, numIncrease, setColor }) => {
  const setColorFn = () => {
    const colors = [30, 30, 30];
    setColor(colors);
    console.log(color);
  };
  return (
    <>
      <div>{number}</div>
      <button onClick={numIncrease}>up</button>
      <button onClick={setColorFn}>color</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    number: state.counter.number,
    color: state.ui.color,
  };
};

const mapDispatchToProp = dispatch => {
  return {
    numIncrease: () => dispatch(actions.increment()),
    setColor: color => dispatch(actions.setColor(color)),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(Counter);
