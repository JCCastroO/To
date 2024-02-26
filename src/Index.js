import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";

import Header from "./components/Header";
import ListaTarefas from "./components/ListaTarefas";

export default function Principal() {
    return (
        <View style={styles.container}>
            <StatusBar />
            <Header />
            <ListaTarefas />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})