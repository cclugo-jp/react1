import React, { Component } from 'react';

class AgregarSaludo extends Component {

  constructor(props) {
    super(props);
    this.state = { greetingName: '' };
    this.actualizar = this.actualizar.bind(this);
    this.addGreeting2 = this.addGreeting2.bind(this);
  }

  addGreeting2() {
    this.props.addGreetingx(this.state.greetingName);
    this.setState({ greetingName: '' });
  }

  actualizar(evento) {
    this.setState({ greetingName: evento.target.value });
  }

  render() {
    return (
      <div className="AgregarSaludo">
        <br/>
        <input 
          type="text"
          onChange={this.actualizar}
          value={this.state.greetingName}
        />
        &nbsp;&nbsp;
        <button onClick={this.addGreeting2}>Add</button>
      </div>
    );
  }

}

export default AgregarSaludo;