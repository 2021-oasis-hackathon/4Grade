import React from 'react';
import styled from 'styled-components';
import RecruitCompetition from './RecruitCompetition';
import BoardSideNavigation from './BoardSideNavigation';

function BoardCommunity(props) {
  return (
    <CommunityBlock>
      <div className="community">
        <BoardSideNavigation />
        <RecruitCompetition />
      </div>
    </CommunityBlock>
  );
}

export default BoardCommunity;

const CommunityBlock = styled.div`
 .community {
   display: flex;
   justify-content: center;

   margin: 0;
   padding: 50px 170px;

   width: 93rem;
 }
`;