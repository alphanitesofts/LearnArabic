import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.appWhite,
    },
    headingContainer: {
        width: "100%",
        // padding: 15,
        borderBottomWidth: 1,
        borderColor: colors.appBorder
    },
    innerContainer:{
        width:"100%",
        height:"90%",
    },
    lampRowContainer:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        paddingVertical:10
    },
    lampIconStyle:{
        width:80,
        height:60,
        resizeMode:"contain"
    }
})

export default styles;