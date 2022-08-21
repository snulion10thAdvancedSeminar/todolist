import axios from "axios";

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

