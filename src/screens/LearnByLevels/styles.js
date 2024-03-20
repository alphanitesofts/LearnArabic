import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.appWhite,
    },
    headingContainer: {
        width: "100%",
        padding: 5,
        borderBottomWidth: 1,
        borderColor: colors.appBorder
    },
    headingText:{
        fontSize:15,
        color:colors.appBlack
    }
})

export default styles;