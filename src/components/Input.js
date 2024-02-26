import React, { useContext, useState } from "react";
import { View, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Feather'

import { TarefasContext } from "../context/TarefasContext";

export default props => {
    const [texto, setTexto] = useState('')
    const { listaTarefas, setListaTarefas } = useContext(TarefasContext)

    push = () => {
        if (texto != '') {
            setListaTarefas([
                ...listaTarefas,
                texto
            ])
            setTexto('')
        } else {
            Alert.alert('Tarefa vazia', 'Descreva uma tarefa!')
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Adicione uma Tarefa"
                placeholderTextColor={'#808080'}
                value={texto}
                onChangeText={setTexto}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => push()}
            >
                <Icon name='plus-circle' size={20} color='white' />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -25,
    },
    input: {
        width: 271,
        height: 54,
        backgroundColor: '#262626',
        borderWidth: 2,
        borderColor: '#5E60CE',
        borderRadius: 6,
        color: '#F2F2F2',
        fontSize: 16,
        padding: 10
    },
    button: {
        width: 54,
        height: 54,
        borderRadius: 6,
        backgroundColor: '#1E6F9F',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 4
    }
})