import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center"
    },
    scrollContainer: {
        width: "100%",
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    headingText: {
        fontSize:24,
        fontWeight:"bold",
        color: colors.appBlack,
    },
    upgradeStringText:{
        color:colors.appBlack,
        fontSize:20,
        marginVertical:10
    }
})

export default styles;