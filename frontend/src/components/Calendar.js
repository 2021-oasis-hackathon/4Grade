import React,{useEffect, useState} from 'react';
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
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
      </CalendarBlock>
  );
}

const CalendarBlock = styled.div`
  .Container {
  }
  .Calendar-Container {
    height:500px;
    width:500px;
    margin:50px;
  }

`;

export default Calendar;