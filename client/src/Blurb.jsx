import React from 'react'
import styled from 'styled-components';
import Styled, { BlurbStyled, OnThisDay, HappyBirthday } from './Styles.js'

const Blurb = (props) => {
  if (props.event === '') {
    return <div></div>
  } else {
    return (
      <BlurbStyled>
        <OnThisDay>On this day:</OnThisDay> {props.event}
        <HappyBirthday>HAPPY BIRTHDAY!!! 🎉 🎉 🎉</HappyBirthday>
      </BlurbStyled>
    )
  }
}

export default Blurb;