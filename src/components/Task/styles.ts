import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        marginBottom: 8,
        backgroundColor: '#262626',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#333333',
        borderRadius: 8,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.6,
        gap: 10
    },
    checkedContainer: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#262626',
    },
    checkbox: {
        borderRadius: 999,
        width: 20,
        height: 20
    },
    checked: {
        opacity: 0.9
    },
    task: {
        color: '#fff',
        flexShrink: 1
    },
    checkedTask: {
        textDecorationLine: 'line-through',
        color: '#808080'
    }
})
