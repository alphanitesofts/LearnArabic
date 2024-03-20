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
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: colors.appDarkPink,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.appLightPink,
        alignSelf:"flex-end",
    },
    roundButton:{
        width: "70%",
        height:72,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: "flex-end",
        alignSelf:"flex-end"
    }
})

export default styles;