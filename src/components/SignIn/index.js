import React, { useState } from 'react';
import './SignIn.scss';

function SignIn({ onChangeScreen }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onChangeFormData = (e) => {
    e.preventDefault();

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    // TODO: 로그인 로직 추가 필요
    window.sessionStorage.setItem('isAuthenticated', 'true');
    setFormData({ email: '', password: '' });
    return true;
  }

  return (
    <div className="template-container">
      <div className="head-container">
        <h1>로그인</h1>
      </div>
      <form className="sign-in-form" onSubmit={onSubmit}>
        <input
          autoFocus
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={onChangeFormData}
          placeholder="이메일"
        />
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={onChangeFormData}
          placeholder="비밀번호"
        />
        <button type="submit">로그인</button>
        <button onClick={() => onChangeScreen('signup')}>회원가입</button>
      </form>
    </div>
  );
}

export default SignIn;
