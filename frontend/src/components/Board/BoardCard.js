import React from 'react';
import styled from 'styled-components';
import { IoMdHeartEmpty, IoMdShare } from "react-icons/io";

function BoardCard({
  id,
  state,
  remain,
  title,
  tag1,
  tag2,
  location,
  applicate
  }) 
{
  return (
      <BoardCardBlock>
        <div className="container">
          <ul className="card">
            <li>
              <span className="card__recruit-state">{state}</span>
              <span className="card__recruit-remain">{remain}</span>
            </li>
            <li className="card__recruit-title">{title}</li>
            {/* <li className="card__recruit-contents">
              다같이 따배씨 완강해보면 어떨까해서 만들어 보았습니다 많은 참여 부탁드립니다 ㅎ..
            </li> */}
            <li className="card__recruit-tag_list">
              <span className="card__recruit-tag">#{tag1}</span>
              <span className="card__recruit-tag">#{tag2}</span>
            </li>
            <li className="card__recruit-bottom">
              <ul className="card__recruit-bottom_li">
                <li className="card__recruit-bottom_li-actions">
                  <IconBlock1><IoMdHeartEmpty /></IconBlock1>
                  <IconBlock2><IoMdShare /></IconBlock2>
                </li>
                <li className="card__recruit-bottom_li-info">
                  {location}
                </li>
                <li className="card__recruit-bottom_li-applicate">
                  {applicate}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </BoardCardBlock>
  );
}

export default BoardCard;

const BoardCardBlock = styled.div`
  .container {
    padding: 0;
  }
  .card {
    box-sizing: border-box;
    padding: 12px 15px;
    width: 20rem;
  }
  .card__recruit-state {
    background-color: #2ec4b6;
    color: #fff;
    font-size: 7px;
    font-weight: 400;
    height: 100%;
    padding: 3px 7px;
    border-radius: 20px;
  }
  .card__recruit-remain {
    font-weight: 500;
    font-size: 11px;
    padding: 3px 7px;
    color: #fa5252;
  }
  .card__recruit-title {
    padding: 5px 0;
    font-weight: 700;
    font-size: 17px;
  }
  .card__recruit-contents {
    font-weight: 400;
    font-size: 11px;
    line-height: 130%;
    padding-bottom: 5px;
  }
  .card__recruit-tag {
    background-color: #e9ecef;
    color: #212529;
    font-size: 7px;
    font-weight: 400;
    height: 100%;
    padding: 3px 7px;
    margin-right: 5px;
    border-radius: 5px;
  }
  .card__recruit-bottom_li {
    line-height: 130%;
    display: flex;
    justify-content: space-between;
    padding: 8px 0 0;
    height: 100%;
  }
  .card__recruit-bottom_li-actions {
    color: #868e96;
    font-size: 13px;
    font-weight: 400;
    display: flex;
  }
  .card__recruit-bottom_li-info {
    color: #868e96;
    padding-top: 2px;

    font-size: 13px;
    font-weight: 400;
  }
  .card__recruit-bottom_li-applicate {
    color: #fff;
    background-color: #38d9a9;
    height: 100%;
    margin-top: 2px;

    border-radius: 5px;
    padding: 0.5px 6px;
    font-size: 10px;
    font-weight: 300;
  }
`;

const IconBlock1 = styled.div`
  font-size: 20px;
  padding-top: -20px;
  padding-right: 5px;
`;
const IconBlock2 = styled.div`
  font-size: 20px;
  padding-top: -20px;
`;