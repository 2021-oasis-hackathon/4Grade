import React from 'react';
import styled from 'styled-components';
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
  nav {
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 170px 60px;
    border-bottom: 1px solid #ced4da;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  }

  .navbar__left-side {
    display: flex;
    padding: 16px 0 16px 0;
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
    box-sizing: border-box;
    padding-right: 0;
  }
  .navbar__right-side_metabus {
    box-sizing: border-box;
    padding: 10px;
    margin: 0 10px;
    width: 140px;

    border: none;
    border-radius: 0.3em;
    background-color: #f06595;
    color: white;
    cursor: pointer;

  }
  .navbar__right-side_logout {
    box-sizing: border-box;
    margin: 0 10px;
    padding: 7px 0 7px 11px;

    border: none;
    background-color: white;
    border-radius: 0.3em;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
  a:visited {
    color: black;
  }
`;

const HeaderSearchIcon = styled.div`
  box-sizing: border-box;
  padding: 10px 18px 10px;
  font-size: 20px;
  cursor: pointer;
`;


function Header() {
  return (
    <>
      <HeaderBlock>
        <nav>
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
            <Link to ="/metabus">
              <button className="navbar__right-side_metabus">
                <span>학교별 METABUS</span>
              </button>
            </Link>
            <button className="navbar__right-side_logout">
              <Link to="/signin">
                <span>로그아웃</span>
              </Link>
            </button>
          </div>
        </nav>
      </HeaderBlock>
    </>
  )
}

export default Header;
