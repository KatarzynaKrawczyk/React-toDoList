import React from "react";
import ListItem from "../component/ListItem";
import axios from "axios";

class ListContainer extends React.Component {
  constructor() {
    console.log("czesto constructor");
    super();

    this.state = {
      edited: 0,
      todos: []
    }
  }
componentDidMount(){
  axios.get('http://195.181.210.249:3000/todo')
    //promisy
    .then(response => response.data)
    .then(data => {
      this.setState({
        todos: data
      });
    })
}
  handleChange = (id) => {
    debugger;
    this.setState({
      edited: this.state.edited + 1
    })
  }

  render() {
    let loginButton = null;
    if(this.state.edited === 0) {
      loginButton = <h3>Login3</h3>;
    }
    return (
      <div>
        {loginButton}        
        <h2>
          Zedytowano: {this.state.edited} razy
        </h2>      
        <ul className="list-group">
          {this.state.todos.map(el => 
           // to na kawałek HTML czyli nasz listItem. key to fix do iteracji
           <ListItem
              key={el.id}
              handleChange={this.handleChange.bind(this, el.id)}
              name={el.title}
           //${this.state.edited}
           //nie działa liczba
            />
           )
//funkcja map do wyświetlania list w react
          }
       
        </ul> 
    </div>
    );
  }
}

export default ListContainer;
