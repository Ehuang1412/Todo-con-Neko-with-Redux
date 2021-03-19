import React from "react";

const Todo = ({todo}) => {

  return(
    <div style={{
      display:'flex', 
      flexDirection:'row', 
      justifyContent:'space-between',
      border: '1px solid #ffdde1',
      padding: '5px'
      }}>
      <div>{todo}</div>
      <div> x </div>
    </div>
  )
}

export default Todo;