import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    newTask: {
        position: "absolute",
        bottom: '-15%',
        flexDirection: 'row',
        gap: 4
    },
    input: {
        backgroundColor: '#262626',
        borderColor: '#0d0d0d',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 6,
        padding: 16,
        fontSize: 16,
        fontFamily: 'Inter_400Regular',
        marginLeft: 24,
        flex: 1,
        color: '#fff'
    },
    focusedInput: {
        borderColor: '#5E60CE',
        borderWidth: 1,
        borderStyle: 'solid',
        color: '#fff'
    },
    button: {
        width: 52,
        height: 52,
        borderRadius: 6,
        backgroundColor: '#1e6f9f',
        alignItems: "center",
        justifyContent: "center",
        marginRight: 24
    }
})