import { Alert, FlatList, Text, View } from "react-native";
import Logo from '../../assets/svg/logo.svg'
import Clipboard from '../../assets/svg/clipboard.svg'
import { styles } from "./styles";
import { NewTask } from "../../components/NewTask";
import { Task } from "../../components/Task";
import { useState } from "react";
import { Info } from "../../components/Info";

export function Home() {
    const [created, setCreated] = useState<number>(0)
    const [completed, setCompleted] = useState<number>(0)
    const [tasks, setTasks] = useState<string[]>([])
    const [task, setTask] = useState<string>('')

    function handleTaskAdd() {
        if (tasks.includes(task)) {
            return Alert.alert('Tarefa já cadastrada', 'Adicione uma tarefa diferente')
        }
        setCreated(prevState => prevState + 1)
        setTasks(prevState => [ ...prevState, task ])
        setTask('')
    }

    function handleTaskRemove(task :string) {
        Alert.alert('Deletar', 'Deseja deletar a tarefa?', [
            {
                text: 'Não'
            },
            {
                text: 'Sim',
                onPress: () => {
                    setCreated(prevState => prevState - 1)
                    setTasks(prevState => prevState.filter(item => item !== task))
                }
            }
        ])
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
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Task
                        key={item}
                        task={item}
                        onRemove={() => handleTaskRemove(item)}
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