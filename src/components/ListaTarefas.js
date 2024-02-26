import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { TarefasContext } from "../context/TarefasContext";
import Icon from 'react-native-vector-icons/Feather'

import Input from "../components/Input";
import Clipboard from '../../assets/img/Clipboard.png'

export default props => {

    const { listaTarefas, setListaTarefas, done, setDone } = useContext(TarefasContext)

    concluir = (tarefa) => {
        if (!done.includes(tarefa)) {
            setDone([
                ...done,
                tarefa
            ])
        } else {
            setDone(
                done.filter(item => item != tarefa)
            )
        }
    }

    remover = (index) => {
        setListaTarefas(
            listaTarefas.filter((item, i) => i != index)
        )
    }

    exibir = () => {
        return listaTarefas.map((tarefa, index) => {
            if (tarefa !== '') {
                return (
                    <View style={styles.taskContainer} key={index}>
                        <TouchableOpacity style={done.includes(tarefa) ? styles.done : styles.notDone}
                            onPress={() => concluir(tarefa)}
                        >
                            {done.includes(tarefa) ? <Icon name='check' size={20} color='white' /> : false}
                        </TouchableOpacity>
                        <Text style={done.includes(tarefa) ? styles.doneTask : styles.task}>{tarefa}</Text>
                        <TouchableOpacity
                            onPress={() => remover(index)}
                        >
                            <Icon name='trash-2' size={20} color='white' />
                        </TouchableOpacity>
                    </View>
                )
            }
        })
    }

    return (
        <View style={styles.container}>
            <Input />
            <View style={styles.contadorContainer}>
                <View style={styles.cria}>
                    <Text style={styles.criaTxt}>Criadas</Text>
                    <Text style={styles.criaNum}>{listaTarefas.length - 1}</Text>
                </View>
                <View style={styles.conc}>
                    <Text style={styles.concTxt}>Concluídas</Text>
                    <Text style={styles.concNum}>{done.length}</Text>
                </View>
            </View>
            {listaTarefas.length <= 1 ?
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTopWidth: 1,
                    borderColor: '#333333',
                    width: '100%',
                    paddingTop: 120
                }}>
                    <Image source={Clipboard} />
                    <Text style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#808080',
                        marginTop: 20
                    }}>Você ainda não tem tarefas cadastradas</Text>
                    <Text style={{
                        fontSize: 14,
                        color: '#808080'
                    }}>Crie tarefas e organize seus itens a fazer</Text>
                </View>
                : <>{exibir()}</>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        backgroundColor: '#1E1E1E',
        alignItems: 'center',
        padding: 24
    },
    contadorContainer: {
        width: '100%',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    cria: {
        flexDirection: 'row'
    },
    criaTxt: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4EA8DE'
    },
    criaNum: {
        marginLeft: 8,
        width: 24,
        height: 19,
        backgroundColor: "#333333",
        borderRadius: 12,
        color: '#FFF',
        textAlign: 'center'
    },
    conc: {
        flexDirection: 'row'
    },
    concTxt: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#8284FA'
    },
    concNum: {
        marginLeft: 8,
        width: 24,
        height: 19,
        backgroundColor: "#333333",
        borderRadius: 12,
        color: '#FFF',
        textAlign: 'center'
    },
    taskContainer: {
        backgroundColor: '#333333',
        flexDirection: 'row',
        borderRadius: 8,
        width: 327,
        height: 64,
        padding: 12,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        elevation: 1,
        shadowColor: '#D9D9D9'
    },
    task: {
        fontSize: 14,
        color: '#F2F2F2'
    },
    doneTask: {
        fontSize: 14,
        color: '#F2F2F2',
        textDecorationLine: 'line-through'
    },
    notDone: {
        borderWidth: 1,
        borderColor: '#4EA8DE',
        width: 24,
        height: 24,
        borderRadius: 12
    },
    done: {
        backgroundColor: '#5E60CE',
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    }
})