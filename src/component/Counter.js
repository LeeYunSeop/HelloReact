import React, { Component } from 'react';

class Counter extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       number: 0,
  //       fixNumber: 0,
  //     };
  //   }
  state = {
    number: 0,
    fixNumber: 0,
  };

  render() {
    const { number, fixNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않음 {fixNumber}</h2>
        <button
          onClick={() => {
            //   this.setState({ number: number + 1 });
            //   this.setState({ number: number + 1 });
            this.setState(
              (prevState) => {
                return { number: prevState.number + 1 };
              },
              () => {
                console.log('실행 후 콜백');
              }
            );
            this.setState(
              (prevState) => ({
                number: prevState.number + 1,
              }),
              () => {
                console.log('실행하고 나서 콜백');
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
export default Counter;
