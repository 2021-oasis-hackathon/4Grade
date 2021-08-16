import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { authService } from '../../Auth/fbase';

function ProfileModal(props) {

  const history = useHistory();

  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  }

  return (
    <ProfileModalBlock>
      <div className="profile">
          <ul className="profile_box">
            <li className="user_name">정땡땡</li>
            <li className="settings">설정</li>
            <li className="sign_out" onClick={onLogOutClick}>로그아웃</li>
          </ul>
      </div>
    </ProfileModalBlock>
  );
}

export default ProfileModal;

const ProfileModalBlock = styled.div`
  .profile {
    float: right;
  }

  .profile_box {
    box-sizing: border-box;
    top: 73px;
    right: 150px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #dee2e6;
    /* box-shadow: 0 -3px 20px rgba(0, 0, 0, 0.1); */
    position: absolute;
    background-color: white;
  }

  /* .profile_box::after { */
    /* bottom: 100%; 말풍선꼭지위치 위아래 */
    /* left: 10%; 말풍선위치 좌우 */
    /* border: 1px solid #dee2e6; */
    /* content: ""; */
    /* height: 0; */
    /* width: 0; */
    /* position: absolute; */
    /* pointer-events: none; */
    /* border-color: transparent transparent white transparent; 말풍선 꼭지방향 */
    /* border-width: 8px; 말풍선 꼭지 사이즈 */
    /* margin-left: 10px; 말풍선 상세위치 조정 */
  /* } */
  

  .sign_out {
    cursor: pointer;
  }
`;