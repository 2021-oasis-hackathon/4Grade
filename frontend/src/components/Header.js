import React from 'react';
import styled from 'styled-components';
import { Link,  } from 'react-router-dom';
import { MdNotificationsNone, MdMailOutline, MdPerson } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";
import Modal from './modal/modal';
import ProfileModal from './modal/profileModal';
import { useState } from 'react';

const HeaderBlock = styled.div`
  nav {
    margin: 0;
    padding: 8px 170px;
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1);
    align-items: center;
  }

  .top {
    display: flex;
    justify-content: space-between;
    line-height: 100%;
  }

  .navbar__left-side {
    display: flex;
    padding: 19px 0;
    align-items: center;
  }
  
  .navbar__logo {
    margin-right: 20px;
  }
  .navbar__logo_img {
    width: 40px;
  }
  .navbar__search {
    display: flex;
    background: #f1f3f5;
    border-radius: 2em;
  }
  
  input {
    box-sizing: border-box;
    width: 400px;
    height: 45px;
    padding: 20px 0 20px 20px;
    background: #f1f3f5;
    outline: none;
    border: none;
    border-radius: 2em;
  }
  input::placeholder {
    font-size: 0.95em;
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

  .bottom {
    display: flex;
    margin-top: 10px;
    margin-right: 500px;
    justify-content: space-between;
    width: 30rem;

    font-weight: 500;
  }

  .navbar__logo_img {
    width: 7rem;
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

  const [openState, setOpenState] = useState(false);

  const openProfileModal = () => {
    setOpenState(true);
  };
  const closeProfileModal = () => {
    setOpenState(false);
  };
  
  return (
    <>
      <HeaderBlock>
        <nav>
          <div className="top">
            <div className="navbar__left-side">
              <div className="navbar__logo">
                <Link to ="/">
                  <img className="navbar__logo_img" src="../../images/도란도란1.svg" alt="로고" />
                </Link>
              </div>
              <div className="navbar__search">
                <input type="search" placeholder="어떤 활동을 하고 싶나요?" />
                <HeaderSearchIcon><HiOutlineSearch /></HeaderSearchIcon>
              </div>
            </div>
            <ul className="navbar__right-side">
              <li className="notice">
                <Link to="/notice">
                    <HeaderNotification><MdNotificationsNone /></HeaderNotification>
                </Link>
              </li>
              <li className="message" onMouseOver={closeProfileModal}>
                <Link to="/message">
                    <HeaderMessage><MdMailOutline /></HeaderMessage>
                </Link>
              </li>
              <li className="profile" onMouseOver={openProfileModal}>
                <HeaderProfile><MdPerson /></HeaderProfile>
              </li>
            </ul>
          </div>
          <div onMouseOver={openProfileModal} onMouseLeave={closeProfileModal}>
            <Modal open={openState}>
              <ProfileModal/>
            </Modal>
          </div>        
          <ul className="bottom">
            <Link to="/recruit-competition">
              <li className="recruit">팀원 모집</li>
            </Link>
            <Link to="/board">
              <li className="board">게시판</li>
            </Link>
            <Link to="/gallery">
              <li className="gallery">작품 갤러리</li>
            </Link>
            <Link to="/calendar">
              <li className="calendar">행사 일정</li>
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
