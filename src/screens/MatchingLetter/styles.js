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
        alignItems: "center"
    },
    imageContainer: {
        width: "90%",
        height: 300,
        borderWidth: 2,
        borderColor: colors.appLightPink,
        padding: 5
    },
    innerImageContainer: {
        width: "100%",
        height: "100%",
        borderWidth: 2,
        borderColor: colors.appLightPink,

    },
    categoryImage: {
        width: "100%",
        height: "100%",
        borderWidth: 2,
        borderColor: colors.appLightPink,
    },
    guessWord: {
        fontSize: 40,
        color: colors.appBlack,
        textAlign: "center",
        fontFamily: "Arial",
        writingDirection: "rtl",
        marginTop: 20,
    },
    roundContainer: {
        width: 20,
        height: 20,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: colors.appBorder,
    },
    renderContainer: {
        flex: 1,
        alignSelf: "center",
        marginVertical: 20,
        marginHorizontal: 10
    },
    secondryInnerContainer: {
        width: "100%",
        padding: 10,
        alignItems: "center",
    }
})

export default styles;