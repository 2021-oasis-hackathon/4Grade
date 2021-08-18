import React from 'react';
import Calendar from '../components/Calendar';
import Layout from '../components/Layout';
import ReactPlayer from 'react-player';

function CampusPage(props) {
  return (
      <Layout>
          <div style={{ display: 'flex', alignItems: 'center', height: '600px' , width:'70%', justifyContent:'center'}}>
                <div style={{ display: 'block'}}>
                  <div><h3>캠퍼스 투어</h3></div>
                    <div><p style={{fontSize:'13px'}}>다른 대학 캠퍼스는 어떤지 궁금하셨죠?</p></div>
                    <div><p style={{fontSize:'13px'}}>집에서 타 학교 친구들과 소통하고 학교도 구경할 수 있는 도란도란만의 캠퍼스 투어, 지금 바로 경험해보세요!</p></div>
                  <br />
                  <img style={{width:'200px', height:'70px'}}src="https://blog.kakaocdn.net/dn/GTdYH/btqE42dlEph/au5BKs2gVkD9ak0XBmKUJ0/img.jpg"/>
                  <ReactPlayer url="https://youtu.be/c2_qhARYc9U" playing controls />
            </div>
          </div>
    </Layout>
  );
}

export default CampusPage;