import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./src/component/Header";
import Input from "./src/component/Input";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Input />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E'
  }
})