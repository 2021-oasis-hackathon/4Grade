import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Board from '../components/Board/Board';

function BoardPage(props) {
  console.log(props);
  return (
    <div>
      <Layout>
        <BoardBlock>
          <Board />
        </BoardBlock>
      </Layout>
    </div>
  );
};

export default BoardPage;

const BoardBlock = styled.div`

   margin: 0;
   padding: 50px 170px;

  //  width: 93rem;
  width:90%;
`;