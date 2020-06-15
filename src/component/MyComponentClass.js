import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MyComponent from './MyComponent';

class MyComponentClass extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        나의 컴포넌트 {name}입니다.
        <br />
        children은 {children}
        <br />
        숫자는 {favoriteNumber}
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: '기본이름',
};
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponentClass;
