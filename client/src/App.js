import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ListaSaludos from './ListaSaludos';

// const App = () => {
//   return (<div className="App">Hello World! 1</div>);
// };

// class App extends Component {
//   render() {
//     return (<div className="App">Hello World! 1</div>);
//   };
// };

class App extends Component {
  render() {
    return (
      <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <h1 className="App-title">Welcome to React</h1>
       </header>
        <ListaSaludos />
      </div>
    );
  };
};

// class App extends Component {
//   state = {users: []}

//   componentDidMount() {
//     fetch('/users')
//       .then(res => res.json())
//       .then(users => this.setState({ users }));
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <h1>Users</h1>
//         {this.state.users.map(user =>
//           <div key={user.id}>{user.username}</div>
//         )}
//       </div>
//     );
//   }
// }

export default App;
