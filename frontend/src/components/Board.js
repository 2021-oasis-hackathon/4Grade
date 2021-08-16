import React from 'react';
import styled from 'styled-components';
import BoardContent from './BoardContent';

function Board(props) {
  return (
    <>
      <BoardBlock>
        <div className="board_content-list">
          <BoardContent />
          <BoardContent />
          <BoardContent />
          <BoardContent />
          <BoardContent />
          <BoardContent />
          <BoardContent />
          <BoardContent />
          <BoardContent />
          <BoardContent />
          <BoardContent />
          <BoardContent />
          <BoardContent />
          <BoardContent />
          <BoardContent />
        </div>
      </BoardBlock>
    </>
  );
}

export default Board;

const BoardBlock = styled.div`
  .board_content-list {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
`;