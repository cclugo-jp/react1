import React, { Component } from 'react';

import Usuarios from './usuarios';
import AgregarSaludo from './AgregarSaludo';

class ListaSaludos extends Component {

  constructor(props) {
    super(props);
    this.state = { greetings: ['asdf'] };
    this.addGreeting1 = this.addGreeting1.bind(this);
    this.removeGreeting1 = this.removeGreeting1.bind(this);
  }

  addGreeting1(newName) {
    this.setState({ greetings: [...this.state.greetings, newName] });
  }

  removeGreeting1(removeName) {
    const filteredGreetings = this.state.greetings.filter(name => {
      return name !== removeName;
    });
    this.setState({ greetings: filteredGreetings });
  }

  renderGreetings() {
    return this.state.greetings.map(name => (
      <Usuarios
        key={name}
        name={name}
        removeGreetingx={this.removeGreeting1}
      />
    ));
  }

  render() {
    return (
      <span className="ListaSaludos">
        <AgregarSaludo addGreetingx={this.addGreeting1}/>
        {this.renderGreetings()}
      </span>
    );
  };
};

export default ListaSaludos;