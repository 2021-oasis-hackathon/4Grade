import React from 'react';
import styled from 'styled-components';
import { HiOutlineSearch } from "react-icons/hi";

const FooterBlock = styled.div`
  .footer {
    height: 80px;
    margin-top: auto;
    background-color: #dde0ea;
  }

  .contents {
    width: 96%;
    max-width: 1100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  .info {
    font-weight: 600;
    font-size: 20px;
  }
`;


function Footer() {
  return (
      <FooterBlock>
        <footer className="footer">
        <div className="contents">
          <img style={{marginRight:'3%', width:'70px'}}src="../../images/Icon3.svg" alt="로고" />
            <span style={{marginRight:'3%', fontSize:'13px'}}>
              문의 dorandoran@naver.com
          </span>
          <span style={{ fontSize:'13px'}}>Copyright ©️ 도란도란 All rights reserved</span>
          </div>
        </footer>
      </FooterBlock>
  )
}

export default Footer;