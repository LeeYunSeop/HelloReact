import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: '',
  };
  //   constructor(props) {
  //     super(props);
  //     this.handleChange = this.handleChange.bind(this);
  //     this.handleClick = this.handleClick.bind(this);
  //   }
  handleChange = (e) => {
    // e.persist();
    // setTimeout(() => {
    //   this.setState({ message: e.type });
    //   console.log('1초 뒤에 값 : ', this.state.message);
    // }, 1000);
    console.log('현재 값 : ', e.target.value);
    this.setState({ [e.target.name]: e.target.value });
    console.log('set 하고 나서 값 : ', this.state.message);
  };
  handleClick = (e) => {
    alert(this.state.username + ' : ' + this.state.message);
    this.setState({ username: '', message: '' }, () => {
      alert(this.state.message);
    });
  };
  handelKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleClick();
    }
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        ></input>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하셈"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handelKeyPress}
        ></input>
        <button onClick={this.handleClick}>메시지</button>
      </div>
    );
  }
}

export default EventPractice;
