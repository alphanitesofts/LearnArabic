import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.appWhite,
    },
    categoryContainer:{
        width:"100%",
        marginTop:10,
        borderTopWidth:1,
        borderColor:colors.appBorder,
        padding:10,
        flexDirection:"column"
    },
    topRowContainer:{
        width:"100%",
        padding:10,
        flexDirection:"row",
        alignItems:"center",
    },
    wordText:{
        fontSize:20,
        textAlign:"center",
        position:"absolute",
        left:0,
        right:0,
        zIndex:1,
    },
    categorySelectorStyle:{
        width:115,
        marginLeft:"auto",
        marginBottom:10
    }
})

export default styles;