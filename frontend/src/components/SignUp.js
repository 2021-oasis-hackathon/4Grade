import axios from "axios";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { authService } from "../Auth/fbase";

const SignUpBlock = styled.div`
.container {
  display: grid;
  grid-gap: 2.5rem;
  place-items: center;
  margin-top: 80px;
}

.title {
  margin-right: 325px;
}

.form {
  display: grid;
  grid-row-gap: 0.8rem;
}

label {
  font-size: 15px;
  font-weight: 500;
}

.form > div {
  display: grid;
  grid-gap: 5px;
}

.input {
  font-size: 15px;
  border: 0.7px solid #a6a3a3;
  border-radius: 5px;
  padding: 10px;
  width: 400px;
  color: #000;
}

.inputSmall {
  font-size: 15px;
  border: 0.7px solid #a6a3a3;
  border-radius: 5px;
  padding: 10px;
  width: 330px;
  color: #000;
}

.errorMessage {
  color: red;
  font-size: 13px;
  font-weight: 500;
}

.noError {
  opacity: 0;
  font-size: 13px;
}

.doubleCheck {
  border: 0.7px solid #3c91e6;
  border-radius: 3px;
  margin-left: 5px;
  background: none;
  font-size: 15px;
  padding: 10px 5px;
  color: #3c91e6;
  cursor: pointer;
}

#buttons {
  display: inline-block;
  text-align: center;
}

#buttons button {
  border: 0.7px solid #3c91e6;
  border-radius: 3px;
  font-size: 15px;
  padding: 10px 40px;
  width: 190px;
  cursor: pointer;
}

#backButton {
  font-weight: 500;
  background: none;
  margin-right: 8px;
  color: #3c91e6;
}

#signUpButton {
  font-weight: 500;
  background: #3c91e6;
  margin-left: 8px;
  color: #fff;
  box-shadow: 0 3px 7px 0 #dbdbdb;
}
`;

function SignUp() {
  
  const [inputs, setInputs] = useState({
    name: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
    email: ''
  });
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordLengthError, setPasswordLengthError] = useState(false);
  
  const { name, password, passwordConfirm, nickname, email } = inputs;

  const history = useHistory();

  const domain = "http://ec2-13-124-13-158.ap-northeast-2.compute.amazonaws.com:8080/api/sign-up";
  
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.createUserWithEmailAndPassword(email,password);
      history.push("/");
    } catch (e) {
      alert("에러가 발생했습니다");
      history.push("/signup");
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onChangeEmail = (e) => {
    const { name, value } = e.target;
    setEmailError(!isEmail(value));
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onChangePassword = (e) => {
    const { name, value } = e.target;
    setPasswordLengthError(value.length < 8);
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onChangePasswordCheck = (e) => {
    const { name, value } = e.target;
    setPasswordError(value !== password);
    setInputs({
      ...inputs,
      [name]: value
    });
  };


  const isEmail = (email) => {
    const regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(email);
  };

  return (
    <>
      <SignUpBlock>
        <div className="container">
          <h2 className="title">회원가입</h2>
          <form onSubmit={onSubmit} className="form" action="index.html">
            <div>
              <label htmlFor="email">이메일</label>
              <div>
                <input
                  className="input"
                  placeholder="이메일 주소"
                  name="email"
                  value={email}
                  required
                  onChange={onChangeEmail}
                />
                {emailError ? (
                  <div className="errorMessage">
                    올바르지 않은 이메일 형식입니다.
                  </div>
                ) : (
                  <div className="noError">no error</div>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="password">비밀번호</label>
              <input
                className="input"
                type="password"
                placeholder="비밀번호"
                name="password"
                value={password}
                required
                onChange={onChangePassword}
              />
              {passwordLengthError ? (
                <div className="errorMessage">
                  비밀번호는 8자 이상이어야 합니다.
                </div>
              ) : (
                <div className={"noError"}>no error</div>
              )}
            </div>
            <div>
              <label htmlFor="passwordConfirm">비밀번호 확인</label>
              <input
                className={"input"}
                type="password"
                placeholder="비밀번호 확인"
                name="passwordConfirm"
                value={passwordConfirm}
                required
                onChange={onChangePasswordCheck}
              />
              {passwordError ? (
                <div className="errorMessage">
                  비밀번호가 일치하지 않습니다.
                </div>
              ) : (
                <div className="noError">no error</div>
              )}
            </div>
            <div>
              <label htmlFor="name">이름</label>
              <input
                className={"input"}
                placeholder="이름(본명)"
                name="name"
                value={name}
                required
                onChange={onChange}
              />
              <div className="noError">no error</div>
            </div>
            <div>
              <label htmlFor="nickname">닉네임</label>
              <div>
                <input
                  className="inputSmall"
                  placeholder="닉네임(별명)"
                  name="nickname"
                  value={nickname}
                  required
                  onChange={onChange}
                />
                <div className="noError">no error</div>
              </div>
            </div>
            <div id="buttons">
              <Link to="/">
                <button id="backButton">돌아가기</button>
              </Link>
              <button
                id="signUpButton"
                htmltype="submt"
                onSubmit={onSubmit}
              >
                가입하기
              </button>
            </div>
          </form>
        </div>
      </SignUpBlock>
    </>
  );
}

export default SignUp;