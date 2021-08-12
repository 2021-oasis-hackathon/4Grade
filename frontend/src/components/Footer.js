import React from 'react';
import styled from 'styled-components';
import { HiOutlineSearch } from "react-icons/hi";

const FooterBlock = styled.div`
  .footer {
    height: 100px;
    margin-top: auto;
    background-color: #dde0ea;
  }

  .contents {
    width: 96%;
    max-width: 1100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
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
            <span className="info">
              서비스에 대한 설명 및 기타 문의사항 링크 넣을 곳
            </span>
          </div>
        </footer>
      </FooterBlock>
  )
}

export default Footer;