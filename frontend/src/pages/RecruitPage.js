import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Recruit from '../components/Recruit/Recruit';

function RecruitPage(props) {
  console.log(props);
  return (
    <div>
      <Layout>
        <RecruitBlock>
          <Recruit />
        </RecruitBlock>
      </Layout>
    </div>
  );
};

export default RecruitPage;

const RecruitBlock = styled.div`
   display: flex;
   justify-content: center;

   margin: 0;
   padding: 50px 170px;

   width: 93rem;
`;