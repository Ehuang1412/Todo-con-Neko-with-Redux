import React from "react";
import { connect } from 'react-redux';
import { addTodo,  addText, editAddTodo } from '../redux/action/addTodo.action'; 

const InputField = ({addText, addTodo, text, selected}) => {
  // state = {
  //   todo:'',
  // } We change the state with the reducer

  // handleChange = e => this.setState({
  //   todo: e.target.value
  // });
  const handleChange = e => addText(e.target.value);

  const handleSubmit = e =>{
    e.preventDefault();
    if( selected || selected === 0)//{
      editAddTodo({
        value: text,
        selected: selected
      });
    //}
    else//{
      // Change dispatch to a props and the prop name is addTodo
      addTodo(text);
      // this.setState({todo:""});
   //}
    
  };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" 
               name="todo" 
               value={text}
               placeholder="Enter your todo..." 
               onChange={handleChange}
        />
      </form>
    );
  
}

const mapDispatchToProps = dispatch =>({
  addTodo : todo => dispatch(addTodo(todo)),
  addText : value => dispatch(addText(value)),
  editAddTodo : obj => dispatch(editAddTodo(obj))
});
// get state of text
const mapStateToProps = ({text, selected})=> ({
  text: text,
  selected: selected,
})
export default connect(mapStateToProps, mapDispatchToProps)(InputField);
