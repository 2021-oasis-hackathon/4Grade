import React from 'react';
import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin  from '@fullcalendar/daygrid';

function Calendar(props) {
  return (
    <div className='mypage-body'>
      <div className='body-wrapper box'>
        <div className='body-info-container'>
          <div className='calendar-wrapper'>
            <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]}/>
          </div>
        </div>
      </div>
    </div>
  );
}

const SignInBlock = styled.div`
  calendar-wrapper {
    height:500
  }

`;

export default Calendar;