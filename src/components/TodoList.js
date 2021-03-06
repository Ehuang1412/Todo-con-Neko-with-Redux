import React from 'react';
import { connect } from "react-redux";
import Todo from "./Todo";

const TodoList = ({todos}) =>{
  return(
    <div style={{
      display: "flex", 
      flexDirection: "column",
      width: "200px",
      margin: "0 auto",
      height: "200px",
      overflowY: "auto",
      overflowX: "hidden"
      }}>
      {
        todos.map((todo,i) => ( 
          <Todo key={i} todo={todo} idx={i} />
      ))}
    </div>
  );
};
// Connects action and reducer
// so that when you use any action it will
// change the reducer and 
// when we need some state/store
// we use mapStateToProps (which gets from next state)
const mapStateToProps = state => ({
  todos:state.todos
});
export default connect(mapStateToProps)(TodoList);