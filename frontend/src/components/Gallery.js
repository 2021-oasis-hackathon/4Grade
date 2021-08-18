import React, { Component, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Button, Spinner } from "react-bootstrap";
import GalleryPicture from './GalleryPicture';
import { AiOutlineSearch } from 'react-icons/ai'
import { createPortal } from 'react-dom';


function Gallery(props) {
    const [num, setNum] = useState(1);
    const [tag, setTag] = useState(true);

    useEffect(() => {
    const firstMenu = document.getElementsByClassName("Category");
    firstMenu[0].classList.add("clicked");
    }, []);
    
    useEffect(() => {
        setTag(true);
        const timerId = setTimeout(() => { setTag(false) }, 1000)

    }, [num]);

    const items = [
         { id: '1', text: '사진' },
        { id: '2', text: '일러스트' },
        { id: '3', text: '그래픽' },
        { id: '4', text: '베스트' },
        { id: '5', text: '영상' },
        { id: '6', text: 'UI/UX' },
        { id: '7', text: '건축' },
        { id: '8', text: '개발' },
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
        setNum(parseInt(e.target.id));
    }

        return (
            <GalleryBlock>
                <div className="All">
                    <div className="Container">
                        <div className="Slider-Container">
                            {/* <Slider {...settings} className="Slider-Container"> */}
                                {
                                    items.map(item => {
                                        return (
                                            <div key={item.id}>
                                                <Button id={item.id} onClick={onClickEvent} className="Category">{item.text}</Button>
                                            </div>
                                        )
                                    })
                                }
                            {/* </Slider> */}
                        </div>
                    </div>
                    <div >
                        <div className="Add-Container" >
                            <Button className="ButtonS">프로젝트 업로드</Button>
                            <input className="inputS" type="text" leftIcon={<AiOutlineSearch />} placeholder="프로젝트 제목 또는 키워드 검색   🔍" />
                                <select style={{border:'1px solid gray', fontSize:'2px', width:'100px' , color:'gray'}}>
                                <option value="1">최신순</option>
                                <option value="2">좋아요순</option>
                                <option value="3">조회순</option>
                                </select>
                        </div>
                    </div>
                    <div className="Picture-Container">
                        {tag ?
                            <Spinner animation="border" role="status" variant="info">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                            :
                            <GalleryPicture number={num} />}
                    </div>
                </div>
            </GalleryBlock>
        );
}

const GalleryBlock = styled.div`
display:flex;
justify-content:center;

.All{
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:75%;

}
.Drop{
    background-color:white;
    color: #48D1CC 0%;
}
.ButtonS {
    width:100px;
    height:30px;
    margin-right:1%;
    font-size:4px;
    border-radius:30px;
    background-color: #48D1CC;
    border-color:white;
}
.inputS {
    width:180px;
    height:30px;
    margin-right:1%;
    font-size:4px;
    border-radius:30px;
    background-color: #f1f2f1;
    border-color:white;
    text-align:center;

}

.Picture-Container{
    display:flex;
    justify-content:center;
    margin:1%;
    width:100%;
}
    .Category{
        width:120px;
        height:60px;
        margin:4%;
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
        width:120px;
        height:60px;
        box-shadow: 0px 0px 0 rgb(0,0,0,0.5);
    }
    .Slider-Container {
        display:flex;
        width:100%;
        margin:10px;
        flex-direction:row;
        justify-content:space-between;
    }
    .Container{
        display:flex;
        justify-content:space-between;
    }
    .slick-next:before,
    .slick-prev:before {
        color:#48D1CC;
    }
.Add-Container{
    display:flex;
    justify-content:flex-end;
    margin-right:4%;
}


`;

export default Gallery;
