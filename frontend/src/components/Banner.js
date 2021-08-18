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
      <div className="mainImage">
        <Carousel activeIndex={index} onSelect={handleSelect} >
        <Carousel.Item>
          <img
              className="d-block w-100 imageh"
            // src="holder.js/800x400?text=First slide&bg=373940"
            src = "../../images/banner1.png"
              alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imageh"
            // src="holder.js/800x400?text=Second slide&bg=282c34"
            src = "../../images/banner2.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imageh"
            // src="holder.js/800x400?text=Third slide&bg=20232a"
            src = "../../images/banner3.png"      
            alt="Third slide"
            
          />
        </Carousel.Item>
      </Carousel>
      </div>
    </BannerBlock>
  );
}

const BannerBlock = styled.div`
display:flex;
justify-content:center;

.mainImage {
  display: inline-block;
  width: 90%;
  margin-top:-1%;
  transform: scale(${props => props.index === 1 ? 1.0 : 0.9 });
}
.image {
  width: inherit;
  max-width: 100%;
  height: auto;
  border: none;
}
.imageh{
  height:300px;
}

.carousel-control-next {}
    height:10%;
`;

export default Banner;