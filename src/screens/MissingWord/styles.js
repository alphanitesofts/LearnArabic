import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.appWhite,
    },
    innerContainer: {
        width: "100%",
        height: "100%",
        alignItems: "center",
    },
    pinkCloudContainer: {
        width: "100%",
        height: 250,
        resizeMode: "contain"
    },
    rowContainer: {
        width: "100%",
        flexDirection: "row",
        position: "absolute",
        justifyContent: "space-between",
        top: 40,
        paddingHorizontal: 25
    },
    guessWord: {
        fontSize: 40,
        color: colors.appBlack,
        textAlign: "center",
        fontFamily: "Arial",
        writingDirection: "rtl",
        marginTop: 20,
    },
    lineContainer: {
        width: 50,
        height: 10,
        borderRadius: 1,
        borderBottomWidth: 3,
        borderColor: colors.appWhite,
    },
    roundButton: {
        width: "90%",
        height:72,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: "flex-end", 
    }
})

export default styles;