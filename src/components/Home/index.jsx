import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const logo = require('../../img/logo.png');

const Home = (props) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={logo}
            />
            <Text></Text>
            <Text></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    },
    logo: {
        height: 118,
        width: 280
    }
});

export default Home;