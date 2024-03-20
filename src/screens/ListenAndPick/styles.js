import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.appWhite
    },
    innerContainer: {
        width: "100%",
        height: "100%",
        alignItems: "center"
    },
    speakerButtonContainer: {
        width: 80,
        height: 80,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: colors.appDarkPink,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.appLightPink
    },
    cloudContainer: {
        width: "100%",
        height: 120,
        paddingVertical: 10,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    arabicText: {
        color: colors.appBlack,
        fontSize: 30,
        textAlign: 'right', // Adjust the text alignment as needed
        writingDirection: 'rtl', // Set the writing direction to right-to-left
        fontFamily: 'Arial'
    }
})

export default styles;