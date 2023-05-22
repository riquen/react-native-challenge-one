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
        <View style={[styles.container, isChecked && styles.checkedContainer]}>
            <Checkbox
                style={[styles.checkbox, isChecked && styles.checked]}
                value={isChecked}
                onValueChange={setIsChecked}
                color={isChecked ? '#5e60ce' : '#4ea8de'}
            />
            <Text style={[styles.task, isChecked && styles.checkedTask]}>{task}</Text>
            <Trash width={16} height={16} />
        </View>
    )
}