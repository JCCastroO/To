import React from "react";
import { View, StyleSheet, Image } from "react-native";

import Logo from '../../assets/img/Logo.png'

export default props => {
    return (
        <View style={styles.container}>
            <Image source={Logo}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0D0D',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})