import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      // return will return JSX, a syntax for defining HTML in JS
      <li>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <span> { this.props.description } </span>
      </li>
    );

  }

}

export default ToDo;
