import React from "react";

class InputField extends React.Component {
  state = {
    todo:'',
  }

  handleChange = e => this.setState({
    todo: e.target.value
  });

  handleSubmit = e =>{
    e.preventDefault();
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

export default InputField;
