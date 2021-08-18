import React from 'react';
import styled, { css } from 'styled-components';

const MenuBlock = styled.div`
  ${props =>
    props.active ?
    css`
    line-height: 200%;
    font-size: 1.2em;
    font-weight: 700;
    color: #2ec4b6;
    cursor: pointer;`
    :
    css`
    line-height: 200%;
    font-weight: 500;
    font-size: 1.1em;
    color: #868e96;
    cursor: pointer;
    `}
`;

function Menu({ name, menu, active }) {

  return (
    <MenuBlock active={active}>
      {name}
    </MenuBlock>
  );
}

export default Menu;

