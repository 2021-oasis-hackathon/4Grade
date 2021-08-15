import React,{useRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
//import 'bootstrap/dist/css/bootstrap.css';


function Calendar(props) {

  return (
    <CalendarBlock>
      <div className="Container">
        <div className="Calendar-Container">
          <div className='mypage-body'>
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
                    ]}/>
                </div>
              </div>
            </div>
          </div>      
        </div>
        <div className="Card-Container">
          <div className="Card">
            <Card.Img className="CarImg" variant="top" src="../../images/party.jpg" />
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="Card">
            <Card.Img className="CarImg" variant="top" src="../../images/party.jpg" />
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="Card">
            <Card.Img className="CarImg" variant="top" src="../../images/party.jpg" />
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>

        </div>
      </div>
      </CalendarBlock>
  );
}

const CalendarBlock = styled.div`
  .Container {
    display:flex;
    justify-content:center;
    width:100%;
    margin-top:5%;
  }
  .Calendar-Container {

    width:500px;
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

`;

export default Calendar;