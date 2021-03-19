import React from 'react';
import { connect } from "react-redux";

const TodoList = ({todos}) =>{
  return(
    <div>
      {
        todos.map((todo,i) => ( 
          <h1>{todo}</h1>
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