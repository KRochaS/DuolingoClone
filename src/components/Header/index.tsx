import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { Container, Heading, Ofensive, Lingots, Button, Course, ContainerCourse} from './styles';
import { SvgUri } from 'react-native-svg';
// import { RectButton } from 'react-native-gesture-handler';
import Tooltip from 'react-native-walkthrough-tooltip';
import Constants from 'expo-constants';
import { Platform } from 'react-native';

const Header: React.FC = () => {

    const [tooltip, setTooltip] = useState(Boolean);
    function handleNavigateBack() {
        setTooltip(true);
    }

    function setState() {

    }
    return (
        <Container>

            {/* <Tooltip width={700} height={120} highlightColor="none" overlayColor="none" withOverlay={true} skipAndroidStatusBar={false} backgroundColor='#172E34'
            popover={<Text>Info here</Text>}>
                
                
              
                <Button onPress={handleNavigateBack} activeOpacity={1}>
                <SvgUri
                    width="40%"
                    height="100%"
                    uri='https://www.flaticon.com/svg/static/icons/svg/940/940207.svg'
                />
              
            </Button>
         
            </Tooltip> */}

            <Tooltip
                tooltipStyle={{ top: 50 }}
                showChildInTooltip={false}
                isVisible={tooltip}

                contentStyle={{ height: 150, width: 400, backgroundColor: '#172E34' }}
                content={<>

                    <ContainerCourse onPress={handleNavigateBack} activeOpacity={1}>
                        <SvgUri
                            width="100%"
                            height="100%"
                            uri='https://www.flaticon.com/svg/static/icons/svg/940/940207.svg'
                        />
                    </ContainerCourse>
                    <Course> Inglês </Course>

                </>
                }
                placement="bottom"
                onClose={() => { setTooltip(false) }}
            >

                <Button onPress={handleNavigateBack} activeOpacity={1}>
                    <SvgUri
                        width="40%"
                        height="100%"
                        uri='https://www.flaticon.com/svg/static/icons/svg/940/940207.svg'
                    />

                </Button>
            </Tooltip>




            {/* 
            <View style={style.container}>
                <SvgUri
                    width="40%"
                    height="40%"
                    uri='https://www.flaticon.com/svg/static/icons/svg/940/940207.svg'
                    viewBox="0 0 1460 352"
                />
            </View> */}

            <SvgUri
                width="10%"
                height="30%"
                uri='http://d35aaqx5ub95lt.cloudfront.net/web-ui/images/b3ede3d53c932ee30d981064671c8032.svg'
            // viewBox="0 0 1460 352"
            />
            <Heading> 207</Heading>



            <SvgUri
                width="10%"
                height="30%"
                uri='http://d35aaqx5ub95lt.cloudfront.net/web-ui/images/icons/398e4298a3b39ce566050e5c041949ef.svg
                '
            // viewBox="0 0 1460 352"
            />
            <Ofensive> 1494</Ofensive>

            <SvgUri
                width="10%"
                height="30%"
                uri='http://d35aaqx5ub95lt.cloudfront.net/web-ui/images/icons/aed279fcbad509208b45ca7a17f3e8dc.svg
                '
            // viewBox="0 0 1460 352"
            />
            <Lingots> 4544</Lingots>



        </Container>
    );
};

export default Header;