import { Text, View } from "react-native";
import { styles } from "./styles";

type InfoProps = {
    created: number
    completed: number
}

export function Info({ created, completed }: InfoProps) {
    return (
        <View style={styles.info}>
            <View style={styles.created}>
                <Text style={styles.createdText}>Criadas</Text>
                <View style={styles.counter}>
                    <Text style={styles.counterText}>{created}</Text>
                </View>
            </View>
            <View style={styles.done}>
                <Text style={styles.doneText}>Concluídas</Text>
                <View style={styles.counter}>
                    <Text style={styles.counterText}>{completed}</Text>
                </View>
            </View>
        </View>
    )
}