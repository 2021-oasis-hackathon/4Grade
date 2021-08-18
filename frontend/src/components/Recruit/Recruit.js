import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Menu from '../Menu';
import RecruitCardList from './RecruitCardList';

function Recruit() {

  const [menus, setRecruit] = useState([
    { 
      id: 1,
      name: "공모전",
      active: true,
    },
    { 
      id: 2,
      name: "대외활동",
      active: false,
    },
    { 
      id: 3,
      name: "스터디",
      active: false,
    },
    { 
      id: 4,
      name: "동아리·취미",
      active: false,
    },
  ]);

  const [id, setId] = useState(1);

  useEffect(() => {
    const firstMenu = document.getElementsByClassName("navigaion__menu");
    firstMenu[0].classList.add("navigaion__menu_clicked");
  }, []);

  
  const onClickMenu = (e) => {
    const menu = document.getElementsByClassName("navigaion__menu");
        if (e.target.classList[1] === "navigaion__menu_clicked") {
            e.target.classList.add("navigaion__menu_clicked");
        } else {
            for (var i = 0; i < 4; i++){
                menu[i].classList.remove("navigaion__menu_clicked");
            }
            e.target.classList.add("navigaion__menu_clicked");
        }
    setId(e.target.id);
  }

  return (
    <>
      <SideNavigationBlock>
        <div className="container">
          <ul className="navigation">
            <li className="navigation__group">
              <h5 className="navigation__group-name">팀원 모집</h5>
              <ul className="navigaion__menu-list">
                {
                  menus.map(menu => {
                    return (
                      <li className="navigaion__menu" id={menu.id} onClick={onClickMenu}>
                            {menu.name}
                      </li>
                    );
                  })
                }
              </ul>
            </li>
          </ul>
        </div>
      </SideNavigationBlock>
      <RecruitCardList number={id} />
    </>
  );
}

export default Recruit;

const SideNavigationBlock = styled.div`
  .container {
    padding: 0 2em;
  }
  .navigation__group {
    width: 8em;
  }
  .navigation__group-name {
    font-weight: 700;
    font-size: 1.3em;
    padding: 17px 0;
    margin-bottom: 15px;
    border-bottom: 1px solid #adb5bd;
  }
  .navigaion__menu {
    line-height: 200%;
    font-weight: 500;
    font-size: 1.1em;
    color: #868e96;
    cursor: pointer;
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