import React,{useRef, useState, useEffect} from 'react';
import styled from 'styled-components';

function Popular(props) {
    return (
        <PopularBlock>
            <div style={{}}>인기 게시글</div>
        </PopularBlock>
    )
}

const PopularBlock = styled.div`
    width:80%;
    display:flex;
    justify-content:flex-start;
    
`;

export default Popular;