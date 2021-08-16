import React from 'react';
import styled from 'styled-components';
import Board from './Board';
import SideNavigation from './SideNavigation';

function Community(props) {
  return (
    <CommunityBlock>
      <div className="community">
        <SideNavigation />
        <Board />
      </div>
    </CommunityBlock>
  );
}

export default Community;

const CommunityBlock = styled.div`
 .community {
   display: flex;
   justify-content: center;

   margin: 0;
   padding: 50px 170px;

   width: 93rem;
 }
`;