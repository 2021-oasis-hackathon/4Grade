import React from 'react';
import Banner from '../components/Banner';
import ContentsList from '../components/ContentsList';
import Layout from '../components/Layout';

function MainPage(props) {
  return (
    <Layout>
      <Banner />
      <ContentsList />
    </Layout>
  );
}

export default MainPage;