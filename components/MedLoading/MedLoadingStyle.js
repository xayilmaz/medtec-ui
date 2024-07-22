import { Dimensions, StyleSheet } from "react-native"

const screenWidth = Dimensions.get("screen").width
const screenHeight = Dimensions.get("screen").height

export const styles = StyleSheet.create({
    container: {
        padding: 50,
        zIndex: 1000,
        width: screenWidth,
        height: screenHeight,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
    },
    blurView: {
        flex: 1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: "absolute",
    },
    lottieViewContainer: {
        shadowRadius: 8,
        borderRadius: 999,
        shadowOpacity: 0.9,
        alignItems: "center",
        shadowColor: "white",
        shadowOffset: { width: 4, height: 4 },
    },
    lottieView: {
        right: 8,
        bottom: 16,
        width: 280,
        height: 280,
        alignSelf: "center",
    }
})