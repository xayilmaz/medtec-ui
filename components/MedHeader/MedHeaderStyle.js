import { Dimensions, StyleSheet } from "react-native"

export const styles =  StyleSheet.create({
    container: {
        height: 44,
        width: Dimensions.get("window").width - 50,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
    textBody: {
        alignItems: "center",
        position: "absolute",
        width: "100%",
        paddingHorizontal: 50,
        zIndex: -1
    },
    text: {
        textAlign: "center",
        marginRight: 8
    },
    saveButton: {
        height: "100%",
        alignSelf: "flex-end",
        justifyContent: "center",
    }
})