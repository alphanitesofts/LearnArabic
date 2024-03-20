import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";

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
})

export default styles;