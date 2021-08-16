import React, { Component, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { Button, NavItem } from "react-bootstrap";
import { formatIsoTimeString } from '@fullcalendar/react';
import { useEffect } from 'react';


function Gallery(props) {
    const [picture, setPicture] = useState([]);

    useEffect(() => {
        
    })

    const [settings, setSettings] = useState(
        {
            nextArrows: true,
            centerMode:true,
            prevArrows: true,
            speed: 500,
            infinite: false,
            initialSlide:2,
            slidesToShow: 4,
            slidesToScroll: 1,
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
        const but = document.getElementsByClassName("Category");
        if (e.target.classList[1] === "clicked") {
            e.target.classList.add("clicked");
        } else {
            for (var i = 0; i < 8; i++){
                but[i].classList.remove("clicked");
            }
            e.target.classList.add("clicked");
        }

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
                                            <Button onClick={onClickEvent} className="Category">{item.text}</Button>
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
    .Category:hover {
        box-shadow:200px 0 0 0 rgba(72,209,204,0.5) inset;
}
        .clicked {
        background-color:#48D1CC;
        color:white;
        width:130px;
        height:60px;
        box-shadow: 0px 0px 0 rgb(0,0,0,0.5);
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



`;

export default Gallery;
