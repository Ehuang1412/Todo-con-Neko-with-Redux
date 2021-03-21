import React from "react";
import { connect } from 'react-redux';
import { addTodo,  addText } from '../redux/action/addTodo.action'; 

class InputField extends React.Component {
  // state = {
  //   todo:'',
  // } We change the state with the reducer

  // handleChange = e => this.setState({
  //   todo: e.target.value
  // });
  handleChange = e => this.props.addText(e.target.value);

  handleSubmit = e =>{
    e.preventDefault();
    // Change dispatch to a props and the prop name is addTodo
    this.props.addTodo(this.props.text);
    // this.setState({todo:""});
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
               name="todo" 
               value={this.props.text}
               placeholder="Enter your todo..." 
               onChange={this.handleChange}
        />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch =>({
  addTodo : todo => dispatch(addTodo(todo)),
  addText : value => dispatch(addText(value))
});
// get state of text
const mapStateToProps = state => ({
  text: state.text,
  selectd: state.selected
})
export default connect(mapStateToProps, mapDispatchToProps)(InputField);
