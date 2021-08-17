import React from 'react';
import Banner from '../components/Banner';
import Layout from '../components/Layout';
import Popular from '../components/Popular';

function MainPage(props) {
  return (
    <Layout>
      <Banner />
      <Popular/>
    </Layout>
  );
}

export default MainPage;