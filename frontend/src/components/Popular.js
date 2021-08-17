import { flexibleCompare } from '@fullcalendar/core';
import React,{useRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

function Popular(props) {
    const more = "더보기>"
    const one=" 1 "
    return (
        <PopularBlock>
            <div style={{ width: '80%'}}>
                <div style={{display:'flex', margin:'2%'}}>
                    <h3>인기 게시글</h3>
                </div>
                <div style={{display:'flex' , justifyContent:'space-between'}}>
                    {PopularData.map(data => {
                        return (
                        <Card
                            bg={'light'}
                            text={'dark'}
                                style={{ width: '360px', borderRadius: '15px', height: '220px'}}
                            className="mb-2"
                        >
                                <Card.Header style={{display:'flex', justifyContent:'space-between',  borderRadius: '15px 15px 0 0',  alignItems:'center'}}>
                                    <span style={{ fontWeight: 'bold',  }}>{data.Header}</span>
                                    <span style={{ color: 'gray', fontSize:'14px' }}>{more}</span>
                                </Card.Header>
                            <Card.Body style={{lineHeight:'30px', backgroundColor:'white'}}>
                                    <Card.Text ><span><span className="number">1</span>   {data.content1}</span><span style={{color:'red'}}>({data.view1})</span></Card.Text>
                                    <Card.Text><span> <span className="number">2</span>   {data.content2}</span><span style={{color:'red'}}>({data.view2})</span></Card.Text>
                                    <Card.Text><span> <span className="number">3</span>   {data.content3}</span><span style={{color:'blue'}}>({data.view3})</span></Card.Text>
                                    <Card.Text><span> <span className="number">4</span>   {data.content4}</span><span>({data.view4})</span></Card.Text>
                                    <Card.Text><span> <span className="number">5</span>   {data.content5}</span><span>({data.view5})</span></Card.Text>
                            </Card.Body>
                        </Card>                     
                        )
                    })}
                </div>
            </div>
        </PopularBlock>
    )
}

const PopularData = [
    {
        "Header": "공모전 팀원 모집",
        "content1": "오아시스 해커톤 개발자 2명 모집",
        "content2": "제일기획 아이디어 페스티벌 1등 할 사람?",
        "content3": "30초 영화제 촬영감독 모집",
        "content4": "공모전 영상 출연을 위한 일반인 배우 모집",
        "content5": "네이버 클로바 공모전 팀원",
        "view1": "82",
        "view2": "52",
        "view3": "33",
        "view4": "4",
        "view5":"6",
    },
        {
        "Header": "학과 게시판",
        "content1": "오늘 교수님께 연락이 왓어...",
        "content2": "아니 우리 학과만 이런거야???",
        "content3": "2학기 비대면이라는데",
        "content4": "취업 어떡하죠...?",
        "content5" : "경제학과 과탑이 전하는 과제 꿀팁☆★",
        "view1": "561",
        "view2": "80",
        "view3": "14",
        "view4": "2",
        "view5":"23",
    },
            {
        "Header": "스터디 인원 모집",
        "content1": "토익 스터디원 모집",
        "content2": "공기업 NCS",
        "content3": "웹 프로젝트 개발자 스터디 모집",
        "content4": "모션그래픽 영상 스터디",
        "content5" : "신문사 스터디 인원충워합니다.",
        "view1": "41",
        "view2": "32",
        "view3": "14",
        "view4": "2",
        "view5":"3",
    }
]

const PopularBlock = styled.div`
    width:100%;
    display:flex;
    justify-content:center;

    .number {
        font-size: .7em;
    width: 1.5em;
    padding: .1em  .2em;
    margin-right:.5em;
    line-height: 1.25em;
    display: inline-block;
    text-align: center;
    color:white;
    background-color:gray
    }
    
`;

export default Popular;