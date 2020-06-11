import React, { useState } from 'react';

const EventPracticeFun = () => {
  const [form, setForm] = useState({
      username: '',
      message: ''
  })
const {username, message} = form;
  const handleChange = (e) => {
    console.log('현재 값 : ', e.target.value);
    const nextForm = {
        ...form,
        [e.target.name]: e.target.value
    }
    setForm(nextForm);
    console.log('set 하고 나서 값 : ', message);
  };
  const handleClick = (e) => {
    alert(username + ' : ' + message);
    setForm({
        username: '',
        message: ''
    })
  };
  const handelKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력하셈"
        value={message}
        onChange={handleChange}
        onKeyPress={handelKeyPress}
      ></input>
      <button onClick={handleClick}>메시지</button>
    </div>
  );
};

export default EventPracticeFun;
