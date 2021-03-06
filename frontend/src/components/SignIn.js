import React, { useReducer, useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import Modal from './modal/modal'
import FindPassword from './modal/modal'
import FindEmail from './modal/modal'
import axios from 'axios';
import { authService } from "../Auth/fbase";
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';



function SignIn(props) {
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const history = useHistory();
  
  const domain = "http://ec2-13-124-13-158.ap-northeast-2.compute.amazonaws.com:8080/api/sign-in"
  
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.signInWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message);
    }
  };
  
  
  
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  
  const openEmailModal = () => {
    setEmailModalOpen(true);
  };
  const closeEmailModal = () => {
    setEmailModalOpen(false);
  };
  
  const openPasswordModal = () => {
    setPasswordModalOpen(true);
  };
  const closePasswordModal = () => {
    setPasswordModalOpen(false);
  };
  
  return (
    <SignInBackground>
        <SignInBlock>
    <div className="container">
        <h2 className="title">로그인</h2>
        <form onSubmit={onSubmit} className="form" action="index.html">
          <div>
            <div>
              <input
                className="input"
                placeholder="이메일 주소"
                name="user-email"
                required
                onChange={onChangeEmail}
              />
              <div className="noError">no error</div>
            </div>
          </div>
          <div>
            <input
              className="input"
              type="password"
              placeholder="비밀번호"
              name="user-password"
              onChange={onChangePassword}
            />
            <div className="noError">no error</div>
          </div>
          <div id="buttons">
            <button
              id="signInButton"
              htmltype="submt"
              onSubmit={onSubmit}
            >
              로그인
            </button>
          </div>
        </form>
        <div className="findInfoMenu">
          <button className="findInfo" onClick={openEmailModal}>
            이메일 찾기&nbsp;&nbsp;|&nbsp;&nbsp;
          </button>
          <button className="findInfo" onClick={openPasswordModal}>
            비밀번호 찾기
          </button>
        </div>
        <Modal open={emailModalOpen} close={closeEmailModal}>
          <FindEmail />
        </Modal>
        <Modal open={passwordModalOpen} close={closePasswordModal}>
          <FindPassword />
        </Modal>
        <div className="signUpQuest">
          도란도란이 처음이신가요?{" "}
          <Link to="/signup">
            <span className="signUp">회원가입</span>
          </Link>
        </div>
            <span className="errorMessage">{error ? "이메일 혹은 비밀번호를 확인해주세요." : ""}</span>
      </div>
    </SignInBlock>
      </SignInBackground>
  );
}

const SignInBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(../../images/loginImage_mac2.png);
  /* background: linear-gradient(
    to right,
    rgba(20, 20, 20, 0.1) 10%,
    rgba(20, 20, 20, 0.7) 70%,
    rgba(20, 20, 20, 1)
  ),
  url(../../images/loginImage_mac.png); */
  background-size: cover;
`;

const SignInBlock = styled.div`

.container {
  display: grid;
  place-items: center;
  grid-template-rows: 50px 220px 0 30px;
  grid-template-columns: 16.2em;

  background-color: #fff;
  /* background-color: rgba(255, 255, 255, 0.9); */
  box-sizing: border-box;

  margin: 12em 35em 12em 60em;
  padding: 2em 1.9em 0.3em;
  border-radius: 1em;
  width: 20em;
  height: 25em;
}
.title {
  padding-right: 7.3em;
  font-size: 1.6em;
  font-weight: 700;
  color: #2F3437;
}

.form {
  display: grid;
  margin-top: 2em;
}

label {
  font-size: 15px;
}

.form > div {
  display: grid;
  place-items: center;
  grid-gap: 5px;
}

.input {
  font-size: 14px;
  border-bottom: 0.7px solid #a6a3a3;
  padding: 10px 3px;
  width: 18em;
  color: #000;
  background-color: #fff;
  /* background-color: rgba(255, 255, 255, 0); */
}

.noError {
  opacity: 0;
  font-size: 11px;
}

#buttons {
  display: inline-block;
  text-align: center;
  margin-top: 0.3em;
}

#signInButton {
  font-size: 15px;
  font-weight: 500;

  padding: 10px;
  width: 17em;
  cursor: pointer;

  /* background: #34D0D4; */
  background: #404040;
  color: #fff;
  box-shadow: 0 3px 7px 0 #dbdbdb;
  border: none;
  border-radius: 5px;
}

.findInfoMenu {
  margin-left: 6em;
}

.findInfo {
  cursor: pointer;
  color: #7e7e7e;
  border: none;
  background-color: inherit;
  font-size: 0.7em;
}

.findInfo:link,
.findInfo:visited,
.findInfo:hover,
.findInfo:active {
  color: #3c91e6;
}

.signUpQuest {
  margin-top: 5.5em;

  color: #7e7e7e;
  font-weight: 400;
  font-size: 0.75em;
  letter-spacing: 0.001em;
}

.signUp {
  text-decoration: underline;
  font-weight: 700;
  /* color: #34D0D4; */
  color: #404040;
  letter-spacing: 0.001em;
}

.errorMessage {
  margin-top: 17em;
  color: red;
  font-size: 0.1em;
}
`;

export default SignIn;