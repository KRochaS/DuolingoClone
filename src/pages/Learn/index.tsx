import React from 'react';
import { Text } from 'react-native';

import { Wrapper, Container, Main } from './styles';

import Header from '../../components/Header';



const Learn: React.FC = () => {
    return (
        <Wrapper>

            <Container>
            <Header/>
                <Main>
                    <Text> oi </Text>
                </Main>
            </Container>
        </Wrapper>
    );
};

export default Learn;
