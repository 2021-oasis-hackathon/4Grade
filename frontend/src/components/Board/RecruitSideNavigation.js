import React, { useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';

function RecruitSideNavigation() {

  const [recruits, setRecruit] = useState([
    { 
      id: 1,
      name: "공모전",
      domain: "/recruit/competition",
      active: false,
    },
    { 
      id: 2,
      name: "대외활동",
      domain: "/recruit/activity",
      active: false,
    },
    { 
      id: 3,
      name: "스터디",
      domain: "/recruit/study",
      active: false,
    },
    { 
      id: 4,
      name: "동아리",
      domain: "/recruit/club",
      active: false,
    },
    { 
      id: 5,
      name: "취미",
      domain: "/recruit/hobby",
      active: false,
    }
  ]);


  return (
    <SideNavigationBlock>
      <div className="container">
        <ul className="navigation">
          <li className="navigation__group">
            <h5 className="navigation__group-name">팀원 모집</h5>
            <ul className="navigaion__menu-list">
              {
                recruits.map(recruit => {
                  return (
                    <li className="navigaion__menu">
                      <NavLink to={recruit.domain} activeClassName="recruit-on_toggle">
                          {recruit.name}
                      </NavLink>
                    </li>
                  );
                })
              }
            </ul>
          </li>
        </ul>
      </div>
    </SideNavigationBlock>
  );
}

export default RecruitSideNavigation;

const SideNavigationBlock = styled.div`
  .navigation__group {
    padding: 10px 5px 10px;
    margin-right: 1.5em;
    width: 8em;
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
  .navigaion__menu_clicked {
      font-size: 1.2em;
    font-weight: 700;
    color: #2ec4b6;
  }
  .recruit-on_toggle {
    font-size: 1.2em;
    font-weight: 700;
    color: #2ec4b6;
  }  
`;