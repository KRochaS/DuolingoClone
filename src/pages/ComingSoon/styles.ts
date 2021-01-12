import styled from 'styled-components/native';
import Constants from 'expo-constants';
import {Platform } from 'react-native';
import colors from '../../styles/colors';

const statusBarHeight = Platform.OS === 'android' ? Constants.statusBarHeight : 0;
export const Wrapper = styled.SafeAreaView`
    background: ${colors.primary};
    flex: 1;
    padding-top: ${statusBarHeight + 'px'}; 


`;

export const Heading = styled.Text`
color: ${colors.gray};
font-family: 'DINRoundPro';
font-size: 20px;


`;

export const Container = styled.View`
    padding-left: 0px;
    padding-right: 0px;
      
    /* height: 100%; */
    /* background-color: red; */

`;

export const Main = styled.View`
    height: 90%;
    /* background-color: blue; */
    justify-content: center;
    align-items: center;
`;
