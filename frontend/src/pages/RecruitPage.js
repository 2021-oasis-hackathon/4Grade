import React from 'react';
import Community from '../components/Recruit/RecruitCommunity';
import Layout from '../components/Layout';

function RecruitPage(props) {
  console.log(props);
  return (
    <div>
      <Layout>
          <Community />
      </Layout>
    </div>
  );
}

export default RecruitPage;