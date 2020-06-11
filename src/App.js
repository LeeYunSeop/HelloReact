import React, {Component} from 'react';
import './App.css';
import MyComponent from './component/MyComponent.js';
import MyComponentClass from './component/MyComponentClass';
import Counter from './component/Counter';
import Say from './component/Say';
import EventPractice from './component/EventPractice';
import EventPracticeFun from './component/EventPracticeFun';
import ValidationSample from './component/ValidationSample';
import ScrollBox from './component/ScrollBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScrollBox ref={(ref) => this.scrollBox=ref} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>맨밑으로 내리셈</button>
        <ValidationSample />
        <EventPracticeFun />
        <MyComponent name="aaaaa" favoriteNumber={111}>
          children값
        </MyComponent>
        <EventPractice />
        <MyComponentClass />
        <Counter></Counter>
        <Say></Say>
      </div>
    );
  }
};

export default App;
