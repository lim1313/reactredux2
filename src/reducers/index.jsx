import { combineReducers } from "redux";
import counter from "./counter.jsx";
import ui from "./ui.jsx";

const rootReducers = combineReducers({ counter, ui });

export default rootReducers;
