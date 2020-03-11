import React, { Component } from "react";

const alertMessage = params => {
  if (params > 50) {
    alert("more...!!!");
  }
};

class Counter extends Component {
  state = {
    count: 1,
    step: 0
  };

  handleIncrement = () => {
    const { step } = this.state;
    this.setState(prevState => ({ count: prevState.count + step }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({ count: prevState.count - this.state.step }));
  };

  handleChooseStep = ({ target: { value } }) => {
    this.setState({
      step: Number(value)
    });
  };

  render() {
    const { count, step } = this.state;

    alertMessage(count);
    return (
      <>
        <>
          <button onClick={this.handleIncrement}>
            INCREMENT<span> {step}</span>
          </button>
          <button onClick={this.handleDecrement}>
            DECREMENT<span> {step}</span>
          </button>
        </>
        <h2>{count}</h2>
        <select onChange={this.handleChooseStep}>
          <option>--select step--</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </>
    );
  }
}

export default Counter;
