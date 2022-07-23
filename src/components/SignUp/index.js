import React, { useState } from 'react';
import './SignUp.scss';

function SignUp({ onChangeScreen }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordCheck: '',
  });

  const onSubmit = (e) => {
    if (!isSubmitAvailable()) {
      e.preventDefault();
      return false;
    }

    window.sessionStorage.setItem('isAuthenticated', true);
    // TODO: 서버로 회원가입 요청하는 로직 작성

    setFormData({
      email: '',
      password: '',
      passwordCheck: '',
    });
    return true;
  }

  const isSubmitAvailable = () => {
    const {
      email,
      password,
      passwordCheck
    } = formData;

    if (!email || !password || !passwordCheck) {
      alert('모든 항목을 채워주세요');
      return false;
    }

    if (password !== passwordCheck) {
      alert('비밀번호가 서로 다릅니다');
      return false;
    }

    if (password.length < 6) {
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
          이메일
          <input
            autoFocus
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={onChangeFormData}
            placeholder="이메일"
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
