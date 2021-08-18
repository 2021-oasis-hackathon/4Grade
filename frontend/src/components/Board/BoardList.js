import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { GoPerson } from "react-icons/go"
import { GrFormView } from "react-icons/gr"
import { AiFillHeart} from "react-icons/ai"
import {BsPencil} from 'react-icons/bs'
var id = 1;

function BoardList({ List }) {
    const history = useHistory();

    const writeEvent = () => [
        history.push("/write")
    ]

    return (
        <BoardListBlock>
            <div>
                <span style={{ marginBottom: '3%' , display:'flex', justifyContent:'space-between'}}><h3>게시판</h3> <span onClick={writeEvent}><IconBlock><BsPencil/></IconBlock>글쓰기</span></span>
                {List.map((li) => {
                    return (
                        <div key={id++} style={{border:'1px solid #D3D3D3' , width:'800px' , height:'110px' , display:'flex', flexDirection:'column',  justifyContent:'space-evenly',}} >
                            <div style={{fontWeight:'bold', fontSize:'20px', marginLeft:'2.3%'}}>{li.title}</div>
                            <div style={{marginLeft:'2.3%'}}>{li.contents}</div>
                            <div style={{display:'flex', justifyContent:'center'}}><div style={{fontSize:'10px', width:'95%'  }}><span style={{fontSize:'10px'}}><span style={{marginRight:'2%'}}>{li.college}</span><span><IconBlock><GoPerson/></IconBlock>{li.name}</span></span>
                            <span style={{float:'right'}}><span>댓글{li.comment} | </span><span>{li.posting_date}일전 | </span><span><IconBlock><GrFormView/></IconBlock>{li.views} | </span><span><IconBlock><AiFillHeart/></IconBlock>{li.likes}</span></span></div></div>
                        </div>
                    )
                })}
            </div>
        </BoardListBlock>
    )
};

const BoardListBlock = styled.div`

    margin-top:2%;
`;

const IconBlock = styled.span`
  font-size: 15px;
  padding-top: -20px;
  padding-right: 2px;
  color:gray;
`;

export default BoardList