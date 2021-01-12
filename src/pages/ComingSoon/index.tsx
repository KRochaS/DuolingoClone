import React from 'react';

import { Wrapper, Container, Heading, Main } from './styles';

import Header from '../../components/Header';

const ComingSoon: React.FC = () => {
    return (


        <Wrapper>

            <Container>
            <Header/>
                <Main>
                <Heading> AGUARDE... </Heading>

                </Main>
            </Container>
        </Wrapper>

        // <Wrapper>
        //   
        // </Wrapper>
    );
};

export default ComingSoon;