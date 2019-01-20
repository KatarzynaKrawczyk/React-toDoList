import React from "react";
import Button from "./Button";

class ListItem extends React.Component {
  render() {
    return (
      <li>
        {this.props.name}
        <Button handleChange={this.props.handleChange} text="edit"></Button>
        <Button text="x"></Button>
      </li>
    )
  }
}

export default ListItem;
