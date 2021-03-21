const initState = {
  todos: [],
  text:'',
  selected: undefined,
}

export const addTodo = (state = initState, action) => {
  switch(action.type){  
    case "PERSIST_TODOS":
      const todos = JSON.parse(window.localStorage.getItem("todos2"));
      return {...state, todos: todos ? todos:[]};
    case 'ADD_TODO':
      const todos2 = state.todos.concat(action.payload)
      window.localStorage.setItem('todos2', JSON.stringify(todos2))
      return {...state, todos: todos2, text:""};
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo,i) => i !== action.payload)
      };
    case 'EDIT_TODO':
      return {
        ...state, 
        text: state.todos[action.payload], 
        selected: action.payload 
      }
    case 'ADD_TEXT':
      return {
        ...state, 
        text: action.payload
      }
    case 'EDIT_ADD_TODO':
      return {
        ...state, 
        todos: state.todos.map((todo,i) =>
          i!==action.payload.selected ? todo : action.payload.value
        ),
        selected: undefined,
        text: ""
      };
    case 'DELETE_ALL':
      return {...state, todos:[], text:""}
    default:
      return state;
  }
};