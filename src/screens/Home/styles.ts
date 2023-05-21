import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
    },
    header: {
        backgroundColor: '#0d0d0d',
        height: 173,
        alignItems: "center",
        justifyContent: "center"
    },
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
        flex: 1
    },
    button: {
        width: 52,
        height: 52,
        borderRadius: 6,
        backgroundColor: '#1e6f9f',
        alignItems: "center",
        justifyContent: "center",
        marginRight: 24
    },
    info: {
        marginTop: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 24
    },
    created: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8
    },
    createdText: {
        fontFamily: 'Inter_700Bold',
        fontSize: 14,
        color: '#4ea8de'
    },
    done: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8
    },
    doneText: {
        fontFamily: 'Inter_700Bold',
        fontSize: 14,
        color: '#8284fa'
    },
    counter: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 2,
        paddingHorizontal: 8,
        backgroundColor: '#333333',
        borderRadius: 999
    },
    counterText: {
        fontFamily: 'Inter_700Bold',
        fontSize: 12,
        color: '#d9d9d9'
    },
    listEmpty: {
        marginTop: 20,
        marginHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 48,
        paddingHorizontal: 20,
        borderTopColor: '#333333',
        borderTopWidth: 1
    },
    listEmptyTitle: {
        marginTop: 16,
        fontFamily: 'Inter_700Bold',
        fontSize: 14,
        color: '#808080'
    },
    listEmptyDescription: {
        fontFamily: 'Inter_400Regular',
        fontSize: 14,
        color: '#808080'
    }
})