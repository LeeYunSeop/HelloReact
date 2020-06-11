import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, children, favoriteNumber }) => {
  return (
    <div>
      나의 컴포넌트 {name}입니다.
      <br />
      children은 {children}
      <br/>
      숫자는 {favoriteNumber}
    </div>
  );
};
MyComponent.defaultProps = {
  name: '기본값',
};
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};
export default MyComponent;
