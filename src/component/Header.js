import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default props => {
    return (
        <View style={styles.header}>
          <Image style={styles.img} source={require('../img/rocket.png')} />
          <Text style={[styles.tittle, styles.to]}>To</Text>
          <Text style={[styles.tittle, styles.do]}>Do</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 173,
        backgroundColor: '#0D0D0D',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
      },
      img: {
        marginRight: 5,
        marginTop: 5,
        width: 20,
        height: 30
      },
      tittle: {
        fontSize: 34,
        fontWeight: 'bold'
      },
      to: {
        color: '#4EA8DE'
      },
      do: {
        color: '#5E60CE'
      }
})