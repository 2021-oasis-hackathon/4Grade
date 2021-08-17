import React from 'react';
import Banner from '../components/Banner';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

function GalleryPage(props) {
  return (
    <Layout >
        <Gallery />
    </Layout>
  );
}

export default GalleryPage;