import React, { useState } from 'react';
import { signUp } from '../../api/auth';
import './SignUp.scss';

function SignUp({ onChangeScreen }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordCheck: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!isSubmitAvailable()) {
      return false;
    }

    const { username, password } = formData;

    if (!isValidate()) {
      alert('아이디는 영문과 숫자로만 입력해주세요');
      return;
    }

    signUp({ username, password });
    
    return true;
  }

  const isValidate = () => {
    const regex = /^[a-z0-9]+$/i;

    return regex.test(formData.username);
  }

  const isSubmitAvailable = () => {
    const {
      username,
      password,
      passwordCheck
    } = formData;

    if (!username.trim() || !password.trim() || !passwordCheck.trim()) {
      alert('모든 항목을 채워주세요');
      return false;
    }

    if (username.trim().length < 4) {
      alert('4자 이상의 아이디를 설정해주세요')
    }

    if (password !== passwordCheck) {
      alert('비밀번호가 서로 다릅니다');
      return false;
    }

    if (password.trim().length < 8) {
      alert('6자리 이상의 비밀번호를 설정해주세요');
      return false;
    }

    return true;
  }

  const onChangeFormData = (e) => {
    e.preventDefault();

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="template-container">
      <div className="head-container">
        <h1>회원가입</h1>
      </div>
      <form className="sign-up-form" onSubmit={onSubmit}>
        <label>
          아이디
          <input
            autoFocus
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={onChangeFormData}
            placeholder="아이디"
          />
        </label>

        <label>
          비밀번호
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={onChangeFormData}
            placeholder="6자리 이상의 비밀번호"
          />
        </label>

        <label>
          비밀번호 확인
          <input
            type="password"
            id="passwordCheck"
            name="passwordCheck"
            value={formData.passwordCheck}
            onChange={onChangeFormData}
            placeholder="비밀번호 확인"
          />
        </label>
        <button type="submit">회원가입 완료</button>
        <button onClick={() => onChangeScreen('signin')}>로그인</button>
      </form>
    </div>
  );
}

export default SignUp;
