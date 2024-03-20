import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor:colors.appWhite
    },
    scrollContainer:{
        width:"100%",
        paddingHorizontal:15,
        paddingVertical:10
    },
    rowContainer:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    textContainer:{
        width:"48%",
        height:150
    },
    contentText:{
        color:colors.appBlack,
        fontSize:15,
        lineHeight:25
    }
})

export default styles;