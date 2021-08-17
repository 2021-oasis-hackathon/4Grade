import React, { useEffect } from 'react';
import { MdRestaurantMenu } from 'react-icons/md';
import styled from 'styled-components';
import { BsFillPersonFill } from 'react-icons/bs'
import {AiFillEye, AiFillHeart} from 'react-icons/ai'


function GalleryPicture({ number }) {
    useEffect(() => {
        
    },[])
    return (
        <PicBlock >
            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'flex-start' }}>
                {pic[number].map((picture) => {
                    const url = "../../images/" + String(number) + "_" + picture.id + ".png";
                    console.log(url);
                    return (
                        <div key={picture.id}  className="picContainer">
                            <div className="pic">
                                <img className="pic" src={url}/>
                            </div>
                            <div>
                                <span style={{ fontSize:'15px' }}><IconBlock><BsFillPersonFill/></IconBlock>{picture.name}</span>
                                <span style={{ float: 'right', fontSize:'15px' }}><IconBlock><AiFillEye/></IconBlock>{picture.view} <IconBlock><AiFillHeart/></IconBlock>{picture.like}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </PicBlock>
    );
}

const PicBlock = styled.div`
width: 100%;
display:flex;
justify-content:'center';

    .picContainer{
        margin:0.5%;
        justify-content:center;
        
    }
    .pic{
        width:250px;
        height:200px;
    }
`;

const IconBlock = styled.span`
  font-size: 15px;
  padding-top: -20px;
  padding-right: 5px;
  color:gray;
`;

const pic = [
    [],
    [{
        "name": "박민영",
        "view": "5134",
        "like": "842",
        "id": "1"
    },
    {
        "name": "이보영",
        "view": "4516",
        "like": "221",
        "id": "2"
    },
    {
        "name": "이석훈",
        "view": "906",
        "like": "83",
        "id": "3"
    },
    {
        "name": "장기하",
        "view": "1532",
        "like": "462",
        "id": "4"
    },
    {
        "name": "봉준호",
        "view": "485",
        "like": "83",
        "id": "5"
    },
    {
        "name": "김지수",
        "view": "5218",
        "like": "68",
        "id": "6"
    },
    {
        "name": "적재",
        "view": "1253",
        "like": "22",
        "id": "7"
    }]
    ,[{
        "name": "박민영",
        "view": "5134",
        "like": "842",
        "id": "1"
    },
    {
        "name": "이보영",
        "view": "4516",
        "like": "221",
        "id": "2"
    },
    {
        "name": "이석훈",
        "view": "906",
        "like": "83",
        "id": "3"
    },
    {
        "name": "장기하",
        "view": "1532",
        "like": "462",
        "id": "4"
    },
    {
        "name": "봉준호",
        "view": "485",
        "like": "83",
        "id": "5"
    },
    {
        "name": "김지수",
        "view": "5218",
        "like": "68",
        "id": "6"
    },
    {
        "name": "적재",
        "view": "1253",
        "like": "22",
        "id": "7"
    }],
    [{
        "name": "박민영",
        "view": "5134",
        "like": "842",
        "id": "1"
    },
    {
        "name": "이보영",
        "view": "4516",
        "like": "221",
        "id": "2"
    },
    {
        "name": "이석훈",
        "view": "906",
        "like": "83",
        "id": "3"
    },
    {
        "name": "장기하",
        "view": "1532",
        "like": "462",
        "id": "4"
    },
    {
        "name": "봉준호",
        "view": "485",
        "like": "83",
        "id": "5"
    },
    {
        "name": "김지수",
        "view": "5218",
        "like": "68",
        "id": "6"
    },
    {
        "name": "적재",
        "view": "1253",
        "like": "22",
        "id": "7"
    },
    {
        "name": "이효리",
        "view": "3214",
        "like": "168",
        "id": "8"
    },
    {
        "name": "이상순",
        "view": "94",
        "like": "79",
        "id": "9"
    },
    {
        "name": "김동현",
        "view": "1315",
        "like": "153",
        "id": "10"
    },
    {
        "name": "백예린",
        "view": "152",
        "like": "73",
        "id": "11"
    },
    {
        "name": "류현진",
        "view": "4531",
        "like": "12",
        "id": "12"
    }
    ,
    {
        "name": "홍시영",
        "view": "649",
        "like": "32",
        "id": "13"
    },
    {
        "name": "박준원",
        "view": "5128",
        "like": "325",
        "id": "14"
    }]
    ,
    [{
        "name": "박민영",
        "view": "5134",
        "like": "842",
        "id": "1"
    },
    {
        "name": "이보영",
        "view": "4516",
        "like": "221",
        "id": "2"
    },
    {
        "name": "이석훈",
        "view": "906",
        "like": "83",
        "id": "3"
    },
    {
        "name": "장기하",
        "view": "1532",
        "like": "462",
        "id": "4"
    },
    {
        "name": "봉준호",
        "view": "485",
        "like": "83",
        "id": "5"
    },
    {
        "name": "김지수",
        "view": "5218",
        "like": "68",
        "id": "6"
    },
    {
        "name": "적재",
        "view": "1253",
        "like": "22",
        "id": "7"
    }]
]

export default GalleryPicture;
