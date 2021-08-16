import React from 'react';
import Community from '../components/Recruit/RecruitCommunity';
import Layout from '../components/Layout';
import BoardCommunity from '../components/Board/BoardCommunity';

function RecruitPage(props) {
  console.log(props);
  return (
    <div>
      <Layout>
          <BoardCommunity />
      </Layout>
    </div>
  );
}

export default RecruitPage;