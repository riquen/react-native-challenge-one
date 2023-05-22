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
    listEmpty: {
        marginHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 48,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: '#333333'
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