import React, { Component } from 'react';

class Usuarios extends Component {
	state = {users: [], saludo: 'epa'}; // parece que state es una palabra reservada, preguntar
	estado = {saludo: 'epax'};

	constructor(props) {
	  super(props);
	  //this.state = {users: [], saludo: 'epa'}; //no es necesario el constructor, preguntar
	  this.saludar = this.saludar.bind(this);
	  this.removeGreeting2 = this.removeGreeting2.bind(this);
	}

	saludar() {
		//this.estado.setState({ 'epale' });
	  this.setState({ saludo: 'epale' });
	  console.log(this.estado.saludo);
	}

	removeGreeting2() {
	  this.props.removeGreetingx(this.props.name);
	}

	componentDidMount() {
		fetch('/users')
		.then(res => res.json())
		.then(users => this.setState({ users }));
	}

	render() {
		return (
			<div className="Usuarios">
				<h3>Users</h3>

				{this.estado.saludo} {this.state.saludo} {this.props.name}
				<br/>
      	<button onClick={this.saludar}>boton de saludar!</button>
      	<br/>
      	<button onClick={this.removeGreeting2}>Remove Me!</button>

      	<p>
					{this.state.users.map(user =>
	          <span key={user.id}>{user.username}<br/></span>
	        )}
	      </p>
			</div>
		);
	};
}

// const Usuarios = () => {
//   return (<div className="Usuarios">Hello World! 2</div>);
// };

export default Usuarios;