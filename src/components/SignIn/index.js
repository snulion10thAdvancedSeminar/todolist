import React, { useState } from 'react';
import { signIn } from '../../api/auth';
import './SignIn.scss';

function SignIn({ onChangeScreen }) {
  const [formData, setFormData] = useState({
    username: '',
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
    e.preventDefault();

    if (!isSubmitAvailable()) {
      return false;
    }

    signIn(formData);

    return true;
  }

  const isSubmitAvailable = () => {
    const {
      username,
      password
    } = formData;

    if (!username.trim() || !password.trim()) {
      alert('모든 항목을 채워주세요');
      return false;
    }

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
          id="username"
          name="username"
          value={formData.username}
          onChange={onChangeFormData}
          placeholder="아이디"
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
