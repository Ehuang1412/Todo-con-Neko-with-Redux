import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../redux/action/addTodo.action";

const Todo = ({todo, idx, deleteTodo}) => {

  return(
    <div style={{
      display:'flex', 
      flexDirection:'row', 
      justifyContent:'space-between',
      border: '1px solid #ffdde1',
      padding: '5px',
      cursor:'pointer'
      }}>
      <div>{todo}</div>
      <div style={{cursor:'pointer'}} 
           onClick={()=>deleteTodo(idx)}> x </div>
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  deleteTodo: key => dispatch(deleteTodo(key))
})
// Create some actions
export default connect(null,mapDispatchToProps)(Todo);