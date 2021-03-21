import "./styles.css";
import InputField from "./components/InputField";
import TodoList from './components/TodoList';
import { connect } from 'react-redux'
import { deleteAll, persistTodos } from "./redux/action/addTodo.action";
import { useEffect } from "react";

const App = ({deleteAll, persistTodos}) => {
  useEffect(() => {
    persistTodos();
  },[persistTodos])
  return (
    <div className="App">
      What I Get to Do Today 
      <InputField />
      <TodoList/>
      <div>
        <button style={{marginTop:'20px', cursor:'pointer'}}
                onClick={deleteAll}>
         Delete All </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  deleteAll : () => dispatch(deleteAll()),
  persistTodos: () => dispatch(persistTodos())
})

export default connect(null, mapDispatchToProps)(App);
