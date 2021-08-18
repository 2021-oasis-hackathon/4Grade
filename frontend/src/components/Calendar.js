import React,{useRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { MdPlace } from "react-icons/md";
//import 'bootstrap/dist/css/bootstrap.css';


function Calendar(props) {

  return (
    <CalendarBlock>
      <div className="Container">
        <div className="Calendar-Container">
          <img src="../images/CalendarImg.svg" alt="로고"/>
          {/* <div className='mypage-body'>
            <div className='body-wrapper box'>
              <div className='body-info-container'>
                <div className='calendar-wrapper'>
                  <FullCalendar
                    className="calendar"
                    defaultView="dayGridMonth"
                    plugins={[dayGridPlugin]}
                    events={[
                      { title: '', start: '2021-08-15T15:00:00', end: '2021-08-15T', color: 'skyblue' },
                      { title: '', start: '2021-08-17T20:00:00', end: '2021-08-17T', color: 'skyblue' },
                      { title: 'dkdklsdk', start: '2021-08-19', end: '2021-08-21', color: 'skyblue' },
                      { title: '', start: '2021-08-19', end: '2021-08-19', color: 'red' },
                    ]}
                    />
                </div>
              </div>
            </div>
          </div>       */}
        </div>
        <div className="Card-Container">
          <div className="Card">
            <Card.Img className="CarImg" variant="top" src="../../images/festival.svg" />
            <Card style={{ width: '18rem' }}>
              <Card.Body className="cardBody">
                <Card.Text className="date">
                  08. 03(화) ~ 08. 11(화)
                </Card.Text>
                <Card.Title className="title">이번 주 호남에서 가장 핫한 축제는
어디?</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">다른 학교 축제 궁금한 사람 여기 모여라!</Card.Subtitle>
                <Card.Text className="place">
                  <MdPlace />조선대학교
                </Card.Text>
                
              </Card.Body>
            </Card>
          </div>
          <div className="Card">
            <Card.Img className="CarImg" variant="top" src="../../images/oasis.svg" />
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Text className="date">
                  08. 09(월) ~ 08. 20(금)
                </Card.Text>
                <Card.Title className="title">2021 제2회 오아시스 해커톤</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">호남지역 네트워킹을 위한 해커톤 대회</Card.Subtitle>
                <Card.Text className="place">
                  <MdPlace />전남대학교 링크플러스사업단
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="Card">
            <Card.Img className="CarImg" variant="top" src="../../images/book.svg" />
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Text className="date">
                  08. 13(금) 
                </Card.Text>
                <Card.Title className="title">헌책 줄게 새 책 다오</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">소장 도서 1대 1교환 행사</Card.Subtitle>
                <Card.Text className="place">
                  <MdPlace />전북대학교 도서관
                </Card.Text>
                
              </Card.Body>
            </Card>
          </div>
          <div className="Card">
            <Card.Img className="CarImg" variant="top" src="../../images/sports.svg" />
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Text className="date">
                  08. 4(수) 
                </Card.Text>
                <Card.Title className="title">제 58회 대통령배 아마추어 e스포츠
대회 광주지역대표선발전</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">지역, 학교 제한없이 누구나 참여 가능한 대회</Card.Subtitle>
                <Card.Text className="place">
                  <MdPlace />광주정보문화산업진흥원
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      </CalendarBlock>
  );
}
export default Calendar;

const CalendarBlock = styled.div`
  .Container {
    display:flex;
    justify-content:center;
    width:100%;
    margin-top:5%;
  }
  .Calendar-Container {
    width: 540px;
  }
  .Card-Container {
    margin-left:5%;
    overflow-y:scroll;
    height:450px;
  }
  .Card {
    display:flex;
    margin-bottom:5%;
  }
  .CarImg {
    width:300px;
    height:200px;
  }

  .date {
    font-size: 0.9em;
    margin-bottom: 0.4em;
  }
  .title {
    font-size: 1.2em;
    font-weight: 700;
    margin-bottom: 0.7em;
  }
  .text-muted {
    font-size: 0.8em;
  }

  .place {
    font-size: 0.9em;
    margin-top: 3.3em;
  }
`;