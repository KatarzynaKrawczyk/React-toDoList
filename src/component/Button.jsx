import React from "react";

function Button(props) {
  return <button className={props.className} onClick={props.handleChange} type={props.type || 'button'}>{props.text}</button>
}
export default Button;
