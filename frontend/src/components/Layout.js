import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const LayoutBlock = styled.div`
  .main {
    min-height: calc(100vh - 180px);
  }
`;

function Layout(props) {
  return (
    <LayoutBlock>  
      <div>
        <Header />
        <main className="main">
          {props.children}
        </main>
        <Footer />
      </div>
    </LayoutBlock>
  );
}

export default Layout;