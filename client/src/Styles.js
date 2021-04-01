import styled from 'styled-components';

// LAYOUT

export const Container = styled.div`
display: flex;
justify-content: center;
height: 100%;
background-color: black;
background-image: linear-gradient(black, darkred);
font-family: 'Germania One', cursive;
font-size: 20px;
text-align: center;
`;

export const Column = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

// TITLE

export const TitleContainer = styled.div`
display: flex;
color: crimson;
font-size: 90px;
-webkit-text-stroke-width: 2px;
-webkit-text-stroke-color: midnightblue;
word-spacing: -7px;
line-height: 85px;
margin-top: 50px;
margin-bottom: 20px;
margin-right: 80px;
`;

export const TitleText = styled.div`
text-align: left;
z-index: 1;
`;

export const TitleEmojiContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
`;

export const Swords = styled.div`
position: absolute;
font-size: 160px;
`;

export const Cake = styled.div`
position: absolute;
`;

// SELECT SECTION

export const SelectHeader = styled.div`
font-size: 30px;
color: crimson;
text-shadow: black 3px 3px 2px;
`;

export const SelectContainer = styled.div`
display: flex;
-webkit-box-align: center;
align-items: center;
gap: 3px;
margin: 15px;
`;

export const MonthStyled = styled.select`
width: 200px;
height: 60px;
font-size: 15px;
`;

export const DayStyled = styled.select`
width: 60px;
height: 60px;
font-size: 15px;
`;

export const FindMyFact = styled.button`
width: 200px;
height: 60px;
background-color: royalblue;
font-family: 'Germania One', cursive;
color: white;
font-size: 28px;
cursor: pointer;
`;

// DATES LIST

export const SearchedHeader = styled.div`
font-size: 35px;
color: crimson;
text-shadow: 3px 3px 2px black;
`;

export const ListItemStyled = styled.div`
background-color: white;
font-size: 22px;
min-width: 50vw;
max-width: 50vw;
min-height: 100px;
border-radius: 80px;
padding: 20px 50px;
margin: 20px;
opacity: 0.9;
`;

export const DateStyled = styled.div`
color: crimson;
font-size: 30px;
`;

export const Space = styled.div`
width: 20px;
height: 60px;
float: right;
`;

export const DeleteButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
font-family: helvetica;
color: darkgray;
float: right;
border-style: solid;
border-color: darkgray;
border-width: 1px;
border-radius: 40px;
cursor: pointer;
`;

// BLURB

export const BlurbStyled = styled.div`
background-color: white;
font-size: 28px;
border-radius: 80px;
padding: 25px 20px;
margin: 20px;
min-width: 70vw;
max-width: 70vw;
opacity: 0.9;
`;

export const OnThisDay = styled.div`
font-size: 45px;
color: crimson;
margin-bottom: 8px;
`;

export const HappyBirthday = styled.div`
font-size: 38px;
color: crimson;
margin-top: 8px;
`;