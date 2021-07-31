import React from 'react';
import { Image, StyleSheet } from 'react-native';

// const img = require('../../img/logo.png');
const img = require('../../../assets/logo.png');
// const img = require('./logo.png');

const styles = StyleSheet.create({

    logo: {
        marginTop: 20,
        height: 100,
        width: 150,
        borderBottomWidth: StyleSheet.hairlineWidth
    }

})

export const Logo = () => (

    <Image source={img} style={styles.logo} resizeMode="contain"/>
    
)