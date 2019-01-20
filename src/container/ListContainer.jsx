import React from "react";
import Button from "../component/Button";
import ListItem from "../component/ListItem";

class ListContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      edited: 0
    }
  }
  handleChange = () => {
    this.setState({
      edited: this.state.edited + 1
    })
  }

  render() {
    return (
      <div>
        Zedytowano {this.state.edited} razy
        <ul>
          <ListItem
            handleChange={this.handleChange.bind(this)}>
          </ListItem>
        </ul>
    </div>
    );
  }
}

export default ListContainer;
