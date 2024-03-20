import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // backgroundColor: colors.appPurple,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    lampIconStyle:{
        width:200,
        height:200,
        resizeMode:"contain"
    }
})

export default styles;