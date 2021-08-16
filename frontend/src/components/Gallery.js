import React, { Component, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { Button } from "react-bootstrap";
import { formatIsoTimeString } from '@fullcalendar/react';


function Gallery(props) {
    const [idx, setIdx] = useState(0);
    const [classList, setClassList] = useState("Category")
    const [settings, setSettings] = useState(
        {
            nextArrows: true,
            centerMode:true,
            prevArrows: true,
            speed: 500,
            infinite:true,
            slidesToShow: 5,
            slidesToScroll: 5,
        }
    )
    const items = [
         { id: 1, text: '사진' },
        { id: 2, text: '일러스트' },
        { id: 3, text: '그래픽' },
        { id: 4, text: '베스트' },
        { id: 5, text: '영상' },
        { id: 6, text: 'UI/UX' },
        { id: 7, text: '건축' },
        { id: 8, text: '개발' },
    ]

    const onClickEvent = (e) => {
        setIdx(e.target.id);
    }
        return (
            <GalleryBlock>
                <div className="Container">
                    <div className="Slider-Container">
                        <Slider {...settings} className="Slider-Container">
                            {
                                items.map(item => {
                                    return (
                                        <div key={item.id}>
                                            <Button onClick={onClickEvent} className={item.id == {idx}  ? "Category" : "clicked" }>{item.text}</Button>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </GalleryBlock>
        );
}

const GalleryBlock = styled.div`
    .Category{
        width:130px;
        height:60px;
        background-color:white;
        border : 1px solid 	#48D1CC;
        color:black;
    }
    .Slider-Container {
        width:900px;
        margin:10px;
    }
    .Container{
        display:flex;
        justify-content:center;
    }
    .slick-next:before,
    .slick-prev:before {
        color:blue;
    }

    .button{
    }

      .clicked {
        color: gold;
      }

`;

export default Gallery;
