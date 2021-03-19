import React from "react";
import { connect } from 'react-redux';

class InputField extends React.Component {
  state = {
    todo:'',
  }

  handleChange = e => this.setState({
    todo: e.target.value
  });

  handleSubmit = e =>{
    e.preventDefault();
    // Change dispatch to a props and the prop name is addTodo
    this.props.addTodo(this.state.todo);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
               name="todo" 
               placeholder="Enter your todo..." 
               onChange={this.handleChange}
        />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch =>({
  addTodo : todo => dispatch(addTodo(todo))
})
export default connect(null, mapDispatchToProps)(InputField);
