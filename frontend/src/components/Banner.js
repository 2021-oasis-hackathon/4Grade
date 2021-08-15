import React,{useState} from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap'

function Banner(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <BannerBlock>
    {/* <div className="mainImage">
      <img
        className="image"
        src="/images/mainBanner.png"
        alt="Banner"
      />
    </div> */}
      <div className="mainImage">
        <Carousel activeIndex={index} onSelect={handleSelect} >
        <Carousel.Item>
          <img
            className="d-block w-100 "
            // src="holder.js/800x400?text=First slide&bg=373940"
            src = "../../images/mainBanner.png"
              alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            // src="holder.js/800x400?text=Second slide&bg=282c34"
            src = "../../images/mainBanner.png"
            alt="Second slide"
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            // src="holder.js/800x400?text=Third slide&bg=20232a"
            src = "../../images/mainBanner.png"      
            alt="Third slide"
            
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      </div>
    </BannerBlock>
  );
}

const BannerBlock = styled.div`

.mainImage {
  display: inline-block;
  width: 100%;
  transform: scale(${props => props.index === 1 ? 1.0 : 0.9 });
}
.image {
  width: inherit;
  max-width: 100%;
  height: auto;
  border: none;
}

`;

export default Banner;