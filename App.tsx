import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import Routes from './src/routes';
import Header from './src/components/Header';

export default function App() {
    let [fontsLoaded] = useFonts({
        DINRoundPro: require('./src/assets/fonts/DINRoundPro-Black.ttf'),
    });

    if(!fontsLoaded) {
        return null;
    }
    return (
        <View style={styles.container}>
          
            <Routes />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
