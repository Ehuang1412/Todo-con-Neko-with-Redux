const initState = {
  todos: [],
  text:''
}

export const addTodo = (state = initState, action) => {
  switch(action.type){  
    case 'ADD_TODO':
      return {...state, todos: state.todos.concat(action.payload), text:""};
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo,i) => i !== action.payload)
      };
    case 'EDIT_TODO':
      return {...state, text: state.todos[action.payload]}
    case 'ADD_TEXT':
      return {...state, text: action.payload}
    default:
      return state;
  }
};