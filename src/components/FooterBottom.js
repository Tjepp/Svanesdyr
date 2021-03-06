import styled from 'styled-components';
import React from 'react';
import Responsive from './layout/Responsive';

const FooterBottom = () => (
  <Background>
    <TextContainer>
      <Text>© Copyright 2018 by SvanesDyr. All Rights Reserved.</Text>
    </TextContainer>
  </Background>
);

export default FooterBottom;

const Background = styled.div`
  min-height: 3.75rem;
  background: #379683;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  color: #888;
  width: 100%;
  max-width: 1200px;
  flex-direction: row;
  padding: 0.5rem;
  ${Responsive.media.tablet`
    justify-content: center;
  `}
`;

const Text = styled.div`
  word-wrap: break-word;
  color: #000;
`;
