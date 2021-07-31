import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

const logo = require('../../img/logo.png');

const Home = (props) => {

    let [fontsLoaded] = useFonts({
        Inter_900Black,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={logo}
                />
                <Text style={styles.title}>Welcome to Globo Ticket</Text>
                <Text style={styles.subtitle}>{props.username}</Text>
                <View style={styles.textcontainer}>
                    <Text style={styles.content}>{introText}</Text>
                </View>
            </View>
        );
    };
};

const introText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20
    },
    logo: {
        height: 100,
        width: 280
    },
    textcontainer: {
        textAlign: 'center',
        paddingTop: 10
    },
    title: {
        fontFamily: 'Inter_900Black'
    },
    subtitle: {
        fontFamily: 'Inter_900Black',
        paddingTop: 5
    },
    content: {
        fontFamily: 'Inter_900Black',
        fontWeight: '300'
    }
});

export default Home;