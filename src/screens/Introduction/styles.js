import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor:colors.appWhite
    },
    contentContainer:{
        width:"100%",
        // height:"90%",
        padding:10
    },
    contentText:{
        color:colors.appBlack,
        fontSize:15,
        lineHeight:30
    }
})

export default styles;