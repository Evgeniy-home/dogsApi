import { Component } from 'react';

class Button extends Component {
    render() {
      return (
        <button onClick={() => alert('Hi! Admin')}>
          Click Here
        </button >
      );
    }
  }
export default Button