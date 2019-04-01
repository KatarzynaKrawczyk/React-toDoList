import React from "react";
import Button from "./Button";

class ListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      isEdited: false
    }
//WAZNE
  }
  handleChange = () => {
    if(!this.state.isEdited) {
      this.props.handleChange();
      this.setState({
        isEdited: true
      })
    }
  }
//WAZNE
  render() {

    console.log('4. render obiekt w JS porownuje i wyrzuca to co ma się zmienić');
    return (
      <li className="d-flex flex-row list-group-item">
        <div className="mr-auto p-2">
          {this.props.name}
        </div>
        <div className="p-2 btn-group" role="group">
          <Button type="button" className="btn btn-secondary" handleChange={this.handleChange.bind(this)} text="edit"></Button>
        </div>
      </li>
    )
  }
}

export default ListItem;
