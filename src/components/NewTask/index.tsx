import { TextInput, TouchableOpacity, View } from "react-native";
import Plus from '../../assets/svg/plus.svg'
import { styles } from "./styles";
import { useState } from "react";

type NewTaskProps = {
    onChangeText: (text: string) => void
    value: string
    onAdd: () => void
}

export function NewTask({ onChangeText, value, onAdd }: NewTaskProps) {
    const [isFocused, setIsFocused] = useState<boolean>(false)

    const handleFocus = () => {
        setIsFocused(true);
    }
    
    const handleBlur = () => {
        setIsFocused(false);
    }

    return (
        <View style={styles.newTask}>
            <TextInput
                style={[styles.input, isFocused && styles.focusedInput]}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor='#808080'
                keyboardAppearance="dark"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChangeText={onChangeText}
                value={value}
            />
            <TouchableOpacity style={styles.button} onPress={onAdd}>
                <Plus width={16} height={16} />
            </TouchableOpacity>
        </View>
    )
}