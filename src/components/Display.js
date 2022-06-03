import { connect } from "react-redux";

const Display = (props) => {
  const { todo } = props;
  return (
    <>
      <ul>
        {todo.map((row, index) => {
          return <li key={index}>{row}</li>;
        })}
      </ul>
    </>
  );
};

// reduxからtodo情報を取得
const mapStateToProps = (state) => {
  return {
    todo: state.todo.todo
  };
};

export default connect(mapStateToProps)(Display);
