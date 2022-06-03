import { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actionCreater";

const Input = (props) => {
  const { clickAdd } = props;
  // テキストボックスの内容を保持
  const [text, setText] = useState("");

  // テキストボックス変更時
  const changeText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input onChange={changeText} value={text} />
      <button onClick={() => clickAdd(text, setText)}>todo</button>
    </>
  );
};

// ボタン押下時に保存用のアクションをdispatchし、reduxに保存
const mapDispatchToProps = (dispatch) => {
  return {
    clickAdd: (text, setText) => {
      if (text) {
        dispatch(addTodo(text));
      }
      setText("");
    }
  };
};

export default connect(null, mapDispatchToProps)(Input);
