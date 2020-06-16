import React, { useState } from 'react';
import Info from './hook/Info';
import Counter from './hook/Counter';
import Average from './hook/Average';
import StyledComponent from './styledcomponent/StyledComponent';

const AppFun = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}
      <Counter />
      <Average />
      <StyledComponent />
    </div>
  );
};

export default AppFun;
