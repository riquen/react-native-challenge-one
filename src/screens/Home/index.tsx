import { Alert, FlatList, Text, View } from "react-native";
import Logo from '../../assets/svg/logo.svg'
import Clipboard from '../../assets/svg/clipboard.svg'
import { styles } from "./styles";
import { NewTask } from "../../components/NewTask";
import { Task } from "../../components/Task";
import { useEffect, useState } from "react";
import { Info } from "../../components/Info";

export function Home() {
    const [created, setCreated] = useState<number>(0)
    const [completed, setCompleted] = useState<number>(0)
    const [tasks, setTasks] = useState<string[]>([])
    const [task, setTask] = useState<string>('')
    const [isChecked, setIsChecked] = useState<boolean[]>([])

    useEffect(() => {
        setCompleted(isChecked.filter(item => item === true).length);
      }, [isChecked])

    function handleTaskAdd() {
        if (tasks.includes(task)) {
            return Alert.alert('Tarefa já cadastrada', 'Adicione uma tarefa diferente')
        }
        setCreated(prevState => prevState + 1)
        setTasks(prevState => [ ...prevState, task ])
        setIsChecked(prevState => [...prevState, false])
        setTask('')
    }

    function handleTaskRemove(index: number) {
        Alert.alert('Deletar', 'Deseja deletar a tarefa?', [
            {
                text: 'Não'
            },
            {
                text: 'Sim',
                onPress: () => {
                    setCreated(prevState => prevState - 1)
                    setTasks(prevState => prevState.filter((item, i) => i !== index))
                    setIsChecked(prevState => {
                        const updatedState = [...prevState]
                        updatedState.splice(index, 1)
                        return updatedState
                    })
                }
            }
        ])
    }

    function handleCheckboxChange(index: number, value: boolean) {
        setIsChecked(prevState => {
            const updatedState = [...prevState]
            updatedState[index] = value
            return updatedState
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Logo width={110} height={32} />
                <NewTask
                    onChangeText={setTask}
                    value={task}
                    onAdd={handleTaskAdd}
                />
            </View>
            <Info created={created} completed={completed} />
            <FlatList
                data={tasks}
                keyExtractor={(_, index) => String(index)}
                renderItem={({ item, index }) => (
                    <Task
                        key={item}
                        isChecked={isChecked[index]}
                        onValueChange={(value) => handleCheckboxChange(index, value)}
                        task={item}
                        onRemove={() => handleTaskRemove(index)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.listEmpty}>
                        <Clipboard width={56} height={56} />
                        <Text style={styles.listEmptyTitle}>Você ainda não tem tarefas cadastradas</Text>
                        <Text style={styles.listEmptyDescription}>Crie tarefas e organize seus itens a fazer</Text>
                    </View>
                )}
            />
        </View>
    )
}