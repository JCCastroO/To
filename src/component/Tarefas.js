import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default props => {
    const { Tarefa } = props

    removerTarefa = (i) => {
        Tarefa.splice(i, 1)
    }

    return (
        Tarefa.map((tarefa, i) => {
            return (
                <View style={styles.tarefa} key={i}>
                    <Text style={styles.tarefaTxt}>
                        {tarefa.listaTarefas}
                    </Text>
                    <TouchableOpacity style={styles.removerBtn}
                        onPress={() => removerTarefa(i)}
                    >
                        <Image source={require('../img/trash.png')} />
                    </TouchableOpacity>
                </View>
            )

        })
    )
}

const styles = StyleSheet.create({
    tarefa: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 8,
        width: '100%',
        borderWidth: 0.3,
        borderColor: '#808080',
        backgroundColor: '#333333',
        borderRadius: 8,
        padding: 8 
    },
    tarefaTxt: {
        fontSize: 14,
        color: '#F2F2F2',
        marginRight: 8
    },
    removerBtn: {
        width: 32,
        height: 32
    }
})