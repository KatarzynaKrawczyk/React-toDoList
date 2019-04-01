import React from "react";

function Button(props) {
  return <div className={props.className} onClick={props.handleChange} 
  type={props.type || 'button'}>{props.text}</div>
}
export default Button;
