import React, { useState } from 'react';
import styled from 'styled-components';
import BoardContent from './BoardContent';

function CompetitionBoard(category) {
  const boardContents = [
      {
        id: 1,
        state: "모집중",
        remain: "D-10",
        title: "따배씨 완주 스터디",
        tag1: "홍정모",
        tag2: "C언어",
        info: "진호 · 2시간 전 · 광주",
        applicate: "13 / 2"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-10",
        title: "따배씨 완주 스터디",
        tag1: "홍정모",
        tag2: "C언어",
        info: "진호 · 2시간 전 · 광주",
        applicate: "13 / 2"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-10",
        title: "따배씨 완주 스터디",
        tag1: "홍정모",
        tag2: "C언어",
        info: "진호 · 2시간 전 · 광주",
        applicate: "13 / 2"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-10",
        title: "따배씨 완주 스터디",
        tag1: "홍정모",
        tag2: "C언어",
        info: "진호 · 2시간 전 · 광주",
        applicate: "13 / 2"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-10",
        title: "따배씨 완주 스터디",
        tag1: "홍정모",
        tag2: "C언어",
        info: "진호 · 2시간 전 · 광주",
        applicate: "13 / 2"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-10",
        title: "따배씨 완주 스터디",
        tag1: "홍정모",
        tag2: "C언어",
        info: "진호 · 2시간 전 · 광주",
        applicate: "13 / 2"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-10",
        title: "따배씨 완주 스터디",
        tag1: "홍정모",
        tag2: "C언어",
        info: "진호 · 2시간 전 · 광주",
        applicate: "13 / 2"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-10",
        title: "따배씨 완주 스터디",
        tag1: "홍정모",
        tag2: "C언어",
        info: "진호 · 2시간 전 · 광주",
        applicate: "13 / 2"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-10",
        title: "따배씨 완주 스터디",
        tag1: "홍정모",
        tag2: "C언어",
        info: "진호 · 2시간 전 · 광주",
        applicate: "13 / 2"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-10",
        title: "따배씨 완주 스터디",
        tag1: "홍정모",
        tag2: "C언어",
        info: "진호 · 2시간 전 · 광주",
        applicate: "13 / 2"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-10",
        title: "따배씨 완주 스터디",
        tag1: "홍정모",
        tag2: "C언어",
        info: "진호 · 2시간 전 · 광주",
        applicate: "13 / 2"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-10",
        title: "따배씨 완주 스터디",
        tag1: "홍정모",
        tag2: "C언어",
        info: "진호 · 2시간 전 · 광주",
        applicate: "13 / 2"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-10",
        title: "따배씨 완주 스터디",
        tag1: "홍정모",
        tag2: "C언어",
        info: "진호 · 2시간 전 · 광주",
        applicate: "13 / 2"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-10",
        title: "따배씨 완주 스터디",
        tag1: "홍정모",
        tag2: "C언어",
        info: "진호 · 2시간 전 · 광주",
        applicate: "13 / 2"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-10",
        title: "따배씨 완주 스터디",
        tag1: "홍정모",
        tag2: "C언어",
        info: "진호 · 2시간 전 · 광주",
        applicate: "13 / 2"
      }
    ];
  return (
    <>
      <BoardBlock>
        <div className="board_content-list">
          {
            boardContents.map(content => {
              return (
                <BoardContent
                  id={content.id}
                  state={content.state}
                  remain={content.remain}
                  title={content.title}
                  tag1={content.tag1}
                  tag2={content.tag2}
                  info={content.info}
                  applicate={content.applicate}
                />
              );
            })
          }
        </div>
      </BoardBlock>
    </>
  );
}

export default CompetitionBoard;

const BoardBlock = styled.div`
  .board_content-list {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
`;