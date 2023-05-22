import { Text, View } from "react-native";
import Checkbox from 'expo-checkbox'
import Trash from '../../assets/svg/trash.svg'
import { styles } from "./styles";
import { useState } from "react";

type TaskProps = {
    task: string
}

export function Task({ task }: TaskProps) {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    return (
        <View style={styles.container}>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setIsChecked} />
            <Text style={styles.task}>{task}</Text>
            <Trash width={16} height={16} />
        </View>
    )
}