import React, { useReducer, useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import Modal from './modal/modal'
import FindPassword from './modal/modal'
import FindEmail from './modal/modal'
import axios from 'axios';
import { authService } from "../Auth/fbase";
import MainPage from '../pages/MainPage';



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
      //history.push("/")
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
            <div className="errorMessage">{error ? "이메일 혹은 비밀번호를 확인해주세요." : ""}</div>
      </div>
    </SignInBlock>
  );
}

const SignInBlock = styled.div`


.container {
  display: grid;
  place-items: center;
  margin-top: 80px;
  grid-template-rows: 50px 200px 0px 100px;
}

.form {
  display: grid;
}

label {
  font-size: 15px;
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
  width: 300px;
  color: #000;
}

.errorMessage {
  color: red;
  font-size: 13px;
}

.noError {
  opacity: 0;
  font-size: 13px;
}

#buttons {
  display: inline-block;
  text-align: center;
}

#signInButton {
  font-size: 15px;
  font-weight: 500;
  padding: 10px;
  width: 320px;
  cursor: pointer;
  background: #3c91e6;
  color: #fff;
  box-shadow: 0 3px 7px 0 #dbdbdb;
  border: none;
  border-radius: 5px;
}

.findInfoMenu {
  margin-left: 140px;
}

.findInfo {
  cursor: pointer;
  color: #7e7e7e;
  border: none;
  background-color: inherit;
}

.findInfo:link,
.findInfo:visited,
.findInfo:hover,
.findInfo:active {
  color: #3c91e6;
}

.signUpQuest {
  color: #7e7e7e;
  font-weight: 500;
}

.signUp {
  text-decoration: underline;
  font-weight: 700;
  color: #3c91e6;
}
`;

export default SignIn;