import React from 'react';
import {connect} from 'react-redux';
import {createIncrement, createDecrement, createReset} from './actions';

class Counter extends React.Component {
  state = {
    amount: 1,
  };

  setAmount = event => {
    this.setState({
      amount: Number(event.currentTarget.value),
    });
  };

  increment = () => {
    const INCREMENT = createIncrement(this.state.amount);
    this.props.dispatch(INCREMENT);
  };

  decrement = () => {
    const DECREMENT = createDecrement(this.state.amount);
    this.props.dispatch(DECREMENT);
  };

  reset = () => {
    const RESET = createReset();
    this.props.dispatch(RESET);
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <input
          type="number"
          value={this.state.amount}
          onChange={this.setAmount}
        />
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <button onClick={this.reset}>RESET</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps)(Counter);
