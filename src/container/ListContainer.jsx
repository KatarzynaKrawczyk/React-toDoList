import React from "react";
import ListItem from "../component/ListItem";

class ListContainer extends React.Component {
  constructor() {
    console.log("czesto constructor");
    super();

    this.state = {
      edited: 0
    }
  }
componentWillMount(){
  console.log('componentWillMount nieczęsto');
}
componentDidMount(){
  console.log('czesto componentDidMount: AJAX, timery liczniki, setInterval');
}

componentWillReceiveProps(nextProps) {
  console.log('zniknie componentWillReceiveProps raczej nie używa się zmiana stanu w oparciu o nowe propsy');
}
shouldComponentUpdate(nextProps, nextState){
   console.log('shouldComponentUpdate optymalizacja komponentów na dużych obiektach');
 // if(zminiamy tylko 'this.state.edited'){
 // return false
 // }
   return true;
 }
componentWillUpdate(nextProps){
  console.log('zniknnie componentWillUpdate nie używa się');
}
componentDidUpdate(){
  console.log('componentDidUpdate jako componentDidMount lepiej uzywac handleChange');
}
 componentWillUnmount(){
   console.log('componentWillUnmount destructor ,kasujemy timery-czyszczenie przeglądaki po naszym komponencie');
 }

  handleChange = () => {
    this.setState({
      edited: this.state.edited + 1
    })
  }

  render() {
    function LoginButton() {
      return <h3>Login4</h3>;
    }
    let loginButton = null;
    let logoutButton = null;
    if(this.state.edited === 0) {
      loginButton = <h3>Login3</h3>;
    } else {
      logoutButton = <h3>Logout3</h3>;
    }
    return (
      <div>
        {this.state.edited === 0 && <h3>Login</h3>}
        {this.state.edited === 0 ? <h3>Login2</h3>:null}
        {loginButton}
        {this.state.edited === 0 && <LoginButton/>}
        nie polecany lepiej w oddzielnym komponencie
        <h2>
          Zedytowano: {this.state.edited} razy
        </h2>
        {logoutButton}
        {this.state.edited > 0 ?
        <h3>Logout</h3> :
        null}
        <ul className="list-group">
          {this.state.edited === 0 ?
            <ListItem
              handleChange={this.handleChange.bind(this)}
              name={'Kasia'}
//nie mogę wstawic cyfry
            /> :
          null }
        </ul>
    </div>
    );
  }
}

export default ListContainer;
