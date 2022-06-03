import { combineReducers, createStore } from "redux";
import { todoReducer } from "./todoReducer";

const rootReducer = combineReducers({
  // Reducer追加するときはここに
  todo: todoReducer
});

// store作成
export const store = createStore(rootReducer);
