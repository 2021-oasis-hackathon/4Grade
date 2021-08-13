import React from 'react';
import styled from 'styled-components';

function Banner(props) {
  return (
    <BannerBlock>
    <div className="mainImage">
      <img
        className="image"
        src="/images/mainBanner.png"
        alt="Banner"
      />
    </div>
    </BannerBlock>
  );
}

const BannerBlock = styled.div`

.mainImage {
  text-align: center;
}
.image {
  width: inherit;
  max-width: 80%;
  height: auto;
  border: none;
}

`;

export default Banner;