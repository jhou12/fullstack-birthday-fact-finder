import React from 'react';
import styled from 'styled-components';
import Styles, { TitleContainer, TitleText, TitleEmojiContainer, Swords, Cake } from './Styles.js';

const Title = (props) => (
  <TitleContainer>
  <TitleText>Birthday <br/>Fact Finder </TitleText>
  <TitleEmojiContainer>
    <Swords>⚔️</Swords><Cake>🎂</Cake>
  </TitleEmojiContainer>
  </TitleContainer>
)

export default Title;