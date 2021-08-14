import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { authService } from '../Auth/fbase';
import { MdNotificationsNone, MdMailOutline, MdPerson } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";

const HeaderBlock = styled.div`
  nav {
    margin: 0;
    padding: 8px 170px;
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.05);
    align-items: center;
  }

  .top {
    display: flex;
    justify-content: space-between;
  }

  .navbar__left-side {
    display: flex;
    padding: 19px 0;
  }
  
  .navbar__logo_img {
    width: 40px;
    padding-top: 3px;
    margin-right: 20px;
  }
  .navbar__search {
    display: flex;
    background: rgb(248, 248, 249);
    border-radius: 2em;
  }
  
  input {
    box-sizing: border-box;
    width: 400px;
    height: 45px;
    padding: 12px 0 12px 20px;
    background: rgb(248, 248, 249);
    background-color: rgba( 255, 255, 255, 0);
    outline: none;
    border: none;
    border-radius: 2em;
  }

  .navbar__right-side {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding-right: 0;
    margin: 20px 0;
  }
  /* .navbar__right-side_metabus {
    padding: 10px;
    margin-right: 20px;
    width: 140px;

    border-radius: 0.3em;
    background-color: #f06595;
    color: white;
    cursor: pointer;

  } */
  .notice {
    margin-top: 1px;
    padding: 10px 10px 7px 11px;
  }
  .message {
    margin-top: 1px;
    padding: 10px 10px 7px 11px;
  }
  .profile {
    margin-top: 1px;
    padding: 10px 10px 7px 11px;
    cursor: pointer;
  }
  .profile::hover {

  }
  .sign_out {
    cursor: pointer;
  }

  .bottom {
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
    margin-right: 500px;
  }
  .recruit {
    
  }

`;

const HeaderSearchIcon = styled.div`
  box-sizing: border-box;
  padding: 10px 18px 10px;
  font-size: 20px;
  cursor: pointer;
`;
const HeaderNotification = styled.div`
  font-size: 22px;
`;
const HeaderMessage = styled.div`
  font-size: 22px;
`;
const HeaderProfile = styled.div`
  font-size: 22px;
`;


function Header() {

  const history = useHistory();

  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  }
  
  return (
    <>
      <HeaderBlock>
        <nav>
          <div className="top">
            <div className="navbar__left-side">
              <div className="navbar__logo">
                <Link to ="/">
                  <img className="navbar__logo_img" src={process.env.PUBLIC_URL + '/logo192.png'} alt="로고" />
                </Link>
              </div>
              <div className="navbar__search">
                <input type="search" placeholder="어떤 활동을 하고 싶나요?" />
                <HeaderSearchIcon><HiOutlineSearch /></HeaderSearchIcon>
              </div>
            </div>
            <div className="navbar__right-side">
              <Link to="/notice" className="notice">
                  <HeaderNotification><MdNotificationsNone /></HeaderNotification>
              </Link>
              <Link to="/message" className="message">
                  <HeaderMessage><MdMailOutline /></HeaderMessage>
              </Link>
              <HeaderProfile className="profile"><MdPerson /></HeaderProfile>
              <ul className="profile_box">
                <li className="user_name">정땡땡</li>
                <li className="settings">설정</li>
                <li className="sign_out" onClick={onLogOutClick}>로그아웃</li>
              </ul>
                  
            </div>
          </div>
            <ul className="bottom">
              <Link to="/recruit">
                <li className="recruit">모집</li>
              </Link>
              <Link to="/board">
                <li className="board">게시판</li>
              </Link>
              <Link to="/gallery">
                <li className="gallery">작품 갤러리</li>
              </Link>
              <Link to="/calendar">
                <li className="calendar">일정</li>
              </Link>
              <Link to="/tour">
                <li className="tour">캠퍼스 투어</li>
              </Link>
            </ul>
        </nav>
      </HeaderBlock>
    </>
  )
}

export default Header;
