import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;
  // 컴포넌트를 만들 때 처음으로 실행
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  // props로 받아 온 값을 state에 동기화 시킬 때 사용, 컴포넌트가 마운트될 때와 업데이트될때 실행
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }
  // 컴포넌트를 만들고 첫 렌더링을 다 마친 후 실행
  componentDidMount() {
    console.log('componentDidMount');
  }
  // props 또는 state를 변경했을 때, 리렌더링을 시작할 지 여부를 지정
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return nextState.number % 10 !== 4;
  }
  // 컴포넌트를 DOM에서 제거할 때 실행
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  // render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 실행
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }
  // 리렌더링을 완료한 후 실행
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트 되기 직전 색상 : ', snapshot);
    }
  }

  render() {
    console.log('render');
    const style = {
      color: this.props.color,
    };
    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
