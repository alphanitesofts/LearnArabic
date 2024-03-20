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
    arabicText:{
        fontSize:45,
        fontWeight:"bold",
        color:colors.appBlack,
        fontFamily:fonts.NotoNaskhArabicBold,
        direction:"rtl",
        textAlign:"center"
    }
})

export default styles;