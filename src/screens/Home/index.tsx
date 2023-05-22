import { FlatList, Text, View } from "react-native";
import Logo from '../../assets/svg/logo.svg'
import Clipboard from '../../assets/svg/clipboard.svg'
import { styles } from "./styles";
import { NewTask } from "../../components/NewTask";
import { Task } from "../../components/Task";

export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Logo width={110} height={32} />
                <NewTask />
            </View>
            <View style={styles.info}>
                <View style={styles.created}>
                    <Text style={styles.createdText}>Criadas</Text>
                    <View style={styles.counter}>
                        <Text style={styles.counterText}>0</Text>
                    </View>
                </View>
                <View style={styles.done}>
                    <Text style={styles.doneText}>Concluídas</Text>
                    <View style={styles.counter}>
                        <Text style={styles.counterText}>0</Text>
                    </View>
                </View>
            </View>
            <FlatList
                data={['Integer urna interdum massa libero auct neque turpis turpis semper.']}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Task task={item} />
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