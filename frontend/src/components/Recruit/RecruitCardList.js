import React, { useState } from 'react';
import styled from 'styled-components';
import RecruitCard from './RecruitCard';

function RecruitCardList({ number }) {
  const boardContents = [
    [],
    [
      {
        id: 1,
        state: "모집중",
        remain: "D-2",
        title: "NC소프트 캐릭터 공모전",
        tag1: "디자이너",
        tag2: "캐릭터",
        location: "광주",
        applicate: "8 / 4"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-8",
        title: "전주홍보콘텐츠 공모전",
        tag1: "전주",
        tag2: "영상",
        location: "전주",
        applicate: "3 / 3"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-6",
        title: "대국민 물 빅데이터 공모전",
        tag1: "빅데이터",
        tag2: "기획",
        tag3: "IT",
        location: "지역무관",
        applicate: "4 / 1"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-80",
        title: "2021 네이버웹툰 지상최대 공모전",
        tag1: "웹툰",
        tag2: "만화",
        location: "군산",
        applicate: "6 / 5"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-2",
        title: "2021 화학창의 콘텐츠 공모전",
        tag1: "화학",
        tag2: "콘텐츠",
        location: "군산",
        applicate: "0 / 1"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-40",
        title: "국민연금 공모전",
        tag1: "국민연금",
        location: "디자이너",
        applicate: "10 / 2"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-7",
        title: "국민참여 청렴콘텐츠 공모전",
        tag1: "아이디어",
        tag2: "영상",
        location: "광주",
        applicate: "2 / 5"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-2",
        title: "같이 자격증 스터디 하실 분 구해요!",
        tag1: "자격증",
        tag2: "취득",
        location: "순천",
        applicate: "5 / 2"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-5",
        title: "화폐사랑 UCC공모전",
        tag1: "영상",
        tag2: "화폐",
        tag3: "웹툰",
        location: "여수",
        applicate: "3 / 1"
      },
    ],
    [
      {
        id: 1,
        state: "모집중",
        remain: "D-30",
        title: "파트너스퀘어 서포터즈",
        tag1: "네이버",
        tag2: "대기업",
        location: "순천",
        applicate: "12 / 3"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-14",
        title: "JTBC 서포터즈",
        tag1: "방송",
        tag2: "미디어",
        location: "광주",
        applicate: "3 / 2"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-2",
        title: "롯데푸드 대학생 마케터",
        tag1: "식품",
        tag2: "기획",
        tag3: "마케팅",
        location: "전주",
        applicate: "1 / 5"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-9",
        title: "틴플메이커 55기",
        tag1: "틴플",
        tag2: "서포터즈",
        tag3: "기획단",
        location: "전주",
        applicate: "3 / 2"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-5",
        title: "CJ 대학생봉사단",
        tag1: "CJ",
        tag2: "대봉단",
        tag3: "문화봉사",
        location: "광주",
        applicate: "7 / 1"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-6",
        title: "장애인고용 인식개선 서포터즈",
        tag1: "인식개선",
        tag2: "장애인",
        tag3: "고용",
        location: "나주",
        applicate: "8 / 6"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-15",
        title: "한전 서포터즈",
        tag1: "한전",
        tag2: "영상",
        location: "여수",
        applicate: "2 / 4"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-22",
        title: "함평 문화재단 서포터즈!",
        tag1: "문화",
        tag2: "재단",
        location: "함평",
        applicate: "2 / 2"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-1",
        title: "광양디자인진흥원 5기",
        tag1: "디자인",
        tag2: "홍보",
        location: "광양",
        applicate: "1 / 1"
      },
    ],
    [
      {
        id: 1,
        state: "모집중",
        remain: "D-1",
        title: "오아시스 해커톤 개발자 2명 모집",
        tag1: "개발자",
        tag2: "프론트",
        location: "광주",
        applicate: "13 / 2"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-8",
        title: "줌 1:1 스터디 하실 분 구해요",
        tag1: "줌",
        tag2: "공부",
        tag3: "스터디",
        location: "지역무관",
        applicate: "8 / 1"
      },
      {
        id: 1,
        state: "모집마감",
        remain: "D-5",
        title: "매일 순공 2시간 인증",
        tag1: "순공",
        tag2: "인증",
        location: "광양",
        applicate: "5 / 1"
      },
      {
        id: 1,
        state: "모집중",
        remain: "상시모집",
        title: "내년 국가직 8급 스터디 하실 분",
        tag1: "국가직",
        tag2: "8급",
        location: "군산",
        applicate: "6 / 3"
      },
      {
        id: 1,
        state: "모집중",
        remain: "상시모집",
        title: "삼성 NCS 스터디 모집해용",
        tag1: "삼성",
        tag2: "NCS",
        location: "여수",
        applicate: "1 / 1"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-30",
        title: "위생사 스터디 구합니다",
        tag1: "위생사",
        location: "광주",
        applicate: " 3 / 1"
      },
      {
        id: 1,
        state: "모집마감",
        remain: "D-9",
        title: "영상 스터디 하실분?",
        tag1: "영상",
        tag2: "모션그래픽",
        location: "전주",
        applicate: " 3 / 8"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-20",
        title: "같이 자격증 스터디 하실 분 구해요!",
        tag1: "자격증",
        tag2: "취득",
        location: "광주",
        applicate: "6 / 4"
      },
      {
        id: 1,
        state: "모집마감",
        remain: "D-15",
        title: "IT관련 코딩 스터디 구합니다",
        tag1: "IT",
        tag2: "코딩",
        tag3: "프론트",
        location: "여수",
        applicate: "5 / 5"
      },
    ],
    [
      {
        id: 1,
        state: "모집중",
        remain: "D-3",
        title: "단편영화제작 동아리",
        tag1: "영상",
        tag2: "단편영화",
        tag3: "영화제작",
        location: "지역무관",
        applicate: "12 / 3"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-8",
        title: "호남의 행복 가이드",
        tag1: "여행",
        tag2: "관광",
        location: "전남",
        applicate: "3 / 2"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-1",
        title: "웹드라마 제작 동아리",
        tag1: "웹드라마",
        tag2: "촬영",
        tag3: "출연",
        location: "광주",
        applicate: "1 / 5"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-5",
        title: "환경보호 동아리 맑음",
        tag1: "환경",
        tag2: "기획",
        tag3: "맑음",
        location: "순천",
        applicate: "3 / 2"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-4",
        title: "볼링 동아리",
        tag1: "볼링",
        tag2: "동아리",
        location: "여수",
        applicate: "7 / 1"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-9",
        title: "게임 ㄱㄱ",
        tag1: "게임",
        tag2: "친목",
        location: "광주",
        applicate: "8 / 6"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-27",
        title: "주식경제연합동아리 WHF",
        tag1: "주식",
        tag2: "떡상",
        location: "광수",
        applicate: "2 / 4"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-11",
        title: "풍물동아리",
        tag1: "풍물",
        tag2: "흥",
        location: "전주",
        applicate: "2 / 2"
      },
      {
        id: 1,
        state: "모집중",
        remain: "D-8",
        title: "붕붕 자전거 신입부원 모집",
        tag1: "운동",
        tag2: "자전거",
        location: "여수",
        applicate: "1 / 1"
      },
    ],
  ];
  return (
    
      <RecruitCardListBlock>
        <div className="board_content-list">
          {
            boardContents[number].map(content => {
              return (
                <RecruitCard
                  id={content.id}
                  state={content.state}
                  remain={content.remain}
                  title={content.title}
                  tag1={content.tag1}
                  tag2={content.tag2}
                  location={content.location}
                  applicate={content.applicate}
                />
              );
            })
          }
        </div>
      </RecruitCardListBlock>
    
  );
}

export default RecruitCardList;

const RecruitCardListBlock = styled.div`
  .board_content-list {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
`;