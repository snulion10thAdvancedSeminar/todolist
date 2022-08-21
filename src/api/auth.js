import axios from "axios";

const JWT_EXPIRY_TIME = 2 * 3600 * 1000; // 서버에서 설정된 jwt access token의 유효시간

export const signIn = ({
  username,
  password,
}) => {
  axios
    .post("/api/accounts/login/", { username, password })
    .then((res) => {
      sessionStorage.setItem('refreshToken', res.data.tokens.refresh);

      onSigninSuccess(res.data.tokens.access);

      window.location.reload();
    })
    .catch((err) => {
      // 에러 처리
    });
};

const onSigninSuccess = (access) => {
  axios.defaults.headers.common['Authorization'] = `JWT ${access}`;

  // 토큰 만료 5분 전에 자동으로 유효시간을 늘려준다.
  setTimeout(silentRefresh, JWT_EXPIRY_TIME - 300000);
}

export const silentRefresh = () => {
  const refreshToken = sessionStorage.getItem('refreshToken');

  if (!refreshToken) {
    return;
  }

  axios
    .post('api/accounts/token/refresh/', {
      refresh: refreshToken
    })
    .then(res => onSigninSuccess(res.data.access))
    .catch(err => {
      if (err.response.status === 401) {
        alert('다시 로그인해주세요.');
        sessionStorage.clear();
        window.location.reload();
      }
    });
}

export const signUp = ({
  email = "",
  username,
  password,
}) => {
  axios
    .post("api/accounts/signup/", {
      email: `${username}@naver.com`,
      username,
      password,
    })
    .then(() => {
      alert("회원가입 완료");
    })
    .catch((err) => {
      // 에러 처리
    });
};

export const signOut = () => {
  axios
    .post("api/accounts/logout/", {
      refresh: window.sessionStorage.getItem("refreshToken"),
    })
    .then((res) => {
      sessionStorage.clear();
      window.location.reload();
    })
    .catch((err) => {
      // 에러 처리
    });
};
