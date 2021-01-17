import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
 flex-direction: row;
 align-items: center;
 justify-content: space-around;
 /* padding-right: 14px; */
 height: 80px;
 top: -3%;
 /* background-color: red; */
 /* margin-right: 10px; */
 border-bottom-width: 1px;
/* border-left-style : solid; */
border-bottom-color : #3B464C;



`;

export const Button = styled.TouchableOpacity`
 flex-direction: row;
 align-items: center;
 /* justify-content: space-around; */
 padding-left: 30px;
 height: 50px;
 /* top: -3%; */
 /* background-color: blue; */
 /* margin-right: 10px; */
 /* border-bottom-width: 1px; */
/* border-left-style : solid; */
/* border-bottom-color : #3B464C; */
width: 160px;



`;



export const Crown = styled.View`

/* background-color: red; */
/* width: 300px; */
flex-direction: row;
height: auto;
`;

export const Heading = styled.Text`
color: #FFD333;
font-family: 'DINRoundPro';
font-size: 17px;
padding-left: 5px;
/* background-color: red; */
width: 80px;



`;
export const ContainerCourse = styled.TouchableOpacity`
 flex-direction: column;
 align-items: center;
 /* justify-content: space-around; */
 /* padding-left: 30px; */
 height: 60px;
 /* top: -3%; */
 /* background-color: blue; */
 /* margin-right: 10px; */
 border-width: 10px;
border : solid;
border-color : #5ab4e9;
width: 70px;
border-radius: 10;
margin-right: 20px;



`;

export const Course = styled.Text`
color: #FFF;
font-family: 'DINRoundPro';
font-size: 17px;
padding-left: 5px;
/* background-color: red; */
width: 90px;
/* margin-top: 20px; */
/* background-image: url(${require(`../../../assets/us.png`)}); */


`;

export const Ofensive = styled.Text`
color: #FFAB33;
font-family: 'DINRoundPro';
font-size: 17px;
padding-right: 20px;
width: 80px;


`;

export const Lingots = styled.Text`
color: #FC4C49;
font-family: 'DINRoundPro';
font-size: 17px;
/* padding-right: 10px; */
/* padding-left: 10px; */
width: 80px;


`;

export const Line = styled.Text`
background-color: red;
height: 40px;
width: 400px;

`;


