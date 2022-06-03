import { ADD_TODO } from "./actions";

// todo初期値
const initialState = {
  todo: []
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // todoを追加
    case ADD_TODO:
      return {
        todo: [...state.todo, payload.todo]
      };

    // デフォルト時
    default:
      return state;
  }
};
