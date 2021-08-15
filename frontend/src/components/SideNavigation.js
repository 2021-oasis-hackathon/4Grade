import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function SideNavigation(props) {
  return (
    <SideNavigationBlock>
      <div className="container">
        <ul className="navigation">
          <li className="navigation__group">
            <h5 className="navigation__group-name">팀원 모집</h5>
            <ul className="navigaion__menu-list">
              <li className="navigaion__menu">
                <Link to="/competition">공모전</Link>
              </li>
              <li className="navigaion__menu">
                <Link to="/activities">대외활동</Link>
              </li>
              <li className="navigaion__menu">
                <Link to="/study">스터디</Link>
              </li>
              <li className="navigaion__menu">
                <Link to="/club">동아리</Link>
              </li>
              <li className="navigaion__menu">
                <Link to="/hobby">취미</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </SideNavigationBlock>
  );
}

export default SideNavigation;

const SideNavigationBlock = styled.div`
  .navigation__group {
    padding: 10px 5px 10px;
    margin-right: 3em;
  }
  .navigation__group-name {
    font-weight: 700;
    font-size: 1.3em;
    padding-bottom: 17px;
    margin-bottom: 15px;
    border-bottom: 1px solid #adb5bd;
  }
  .navigaion__menu {
    line-height: 200%;
  }
`;