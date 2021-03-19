import "./styles.css";
import InputField from "./components/InputField";
import TodoList from './components/TodoList';

export default function App() {
  return (
    <div className="App">
      What I Get to Do Today 
      <InputField />
      <TodoList/>
      
    </div>
  );
}
