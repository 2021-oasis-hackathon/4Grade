import React from 'react';
import styled from 'styled-components';
import RecruitCompetition from './RecruitCompetition';
import RecruitSideNavigation from './RecruitSideNavigation';

function RecruitCommunity(props) {
  return (
    <CommunityBlock>
      <div className="community">
        <RecruitSideNavigation />
        <RecruitCompetition />
      </div>
    </CommunityBlock>
  );
}

export default RecruitCommunity;

const CommunityBlock = styled.div`
 .community {
   display: flex;
   justify-content: center;

   margin: 0;
   padding: 50px 170px;

   width: 93rem;
 }
`;