import React, { useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';

function BoardSideNavigation() {

  const [univs, setUniv] = useState([
    { 
      id: 1,
      name: "사회대",
      domain: "/board/society",
      active: false,
    },
    { 
      id: 2,
      name: "예대",
      domain: "/board/art",
      active: false,
    },
    { 
      id: 3,
      name: "경영대",
      domain: "/board/operation",
      active: false,
    },
    { 
      id: 4,
      name: "인문대",
      domain: "/board/humanities",
      active: false,
    },
    { 
      id: 5,
      name: "공대",
      domain: "/board/engineering",
      active: false,
    }
  ]);


  return (
    <SideNavigationBlock>
      <div className="container">
        <ul className="navigation">
          <li className="navigation__group">
            <h5 className="navigation__group-name">게시판</h5>
            <ul className="navigaion__menu-list">
              {
                univs.map(univ => {
                  return (
                    <li className="navigaion__menu">
                      <NavLink to={univ.domain} activeClassName="recruit-on_toggle">
                          {univ.name}
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

export default BoardSideNavigation;

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