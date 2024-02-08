import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Image, Text } from "react-native";

import Lista from "./Lista";
import Tarefas from "./Tarefas";

export default props => {
    const [listaTarefas, setListaTarefas] = useState('')

    adiciona = () => {
        const lista = {
            listaTarefas
        }
        Lista.push(lista)
        limparInput()
    }

    limparInput = () => {
        setListaTarefas('')
    }

    return (
        <>
            <View style={styles.addTarefa}>
                <TextInput
                    style={styles.inputAdd}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={'#808080'}
                    inputMode="text"
                    value={listaTarefas}
                    onChangeText={setListaTarefas}
                />
                <TouchableOpacity
                    style={styles.btnAdd}
                    onPress={() => adiciona()}
                >
                    <Image source={require('../img/btnAdd.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.listaTarefas}>
                <View style={styles.infos}>
                    <View style={styles.cria}>
                        <Text style={styles.criaTxt}>Tarefas Criadas</Text>
                        <Text style={styles.criaNum}>{Lista.length}</Text>
                    </View>
                </View>
                {
                    Lista == '' ?
                        <View style={styles.semTarefas}>
                            <Image source={require('../img/Clipboard.png')} />
                            <Text style={styles.stTxt}>Você ainda não tem tarefas cadastradas</Text>
                            <Text style={styles.stSubTxt}>Crie tarefas e organize seus itens a fazer</Text>
                        </View> :
                        <Tarefas Tarefa={Lista} />
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    addTarefa: {
        position: 'absolute',
        flexDirection: 'row',
        marginTop: 145,
        marginHorizontal: '11%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputAdd: {
        backgroundColor: '#262626',
        padding: 16,
        width: 271,
        height: 52,
        borderRadius: 6,
        color: '#808080',
        fontSize: 16
    },
    btnAdd: {
        width: 52,
        height: 52,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginLeft: 4
    },
    listaTarefas: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 60,
        alignItems: 'center'
    },
    infos: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cria: {
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center'
    },
    conc: {
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center'
    },
    criaTxt: {
        color: '#4EA8DE',
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 10
    },
    criaNum: {
        color: 'white',
        backgroundColor: '#333333',
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 999
    },
    semTarefas: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
        paddingTop: 50,
        borderTopWidth: 1,
        borderTopColor: '#333333'
    },
    stTxt: {
        color: '#808080',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 16
    },
    stSubTxt: {
        color: '#808080',
        fontSize: 14
    }
})

