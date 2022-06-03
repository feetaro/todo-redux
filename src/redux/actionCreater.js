import { ADD_TODO } from "./actions";

// ボタン押下時のアクションを定義
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: { todo: text }
  };
};
