import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems:"center",
        backgroundColor:colors.appWhite
    },
    innerContainer:{
        width:"100%",
        padding:10,
        alignItems:"center",
        zIndex:9999,
    },
    headingText:{
        fontSize:20,
        fontWeight:"500",
        color:colors.appBlack,
        marginBottom:20,
    },
    headingSecondLineText:{
        fontSize:20,
        fontWeight:"500",
        color:colors.appBlack,
    },
    greenText:{
        backgroundColor:colors.appGreen
    },
    soundIcon:{
        width:20,
        height:20,
        resizeMode:"contain"
    },
    rowContainer:{
        width:"auto",
        alignItems:"center",
        flexDirection:"row"
    },
    speakerButtonContainer:{
        width:40,
        height:40,
        backgroundColor:colors.appBorder,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
        borderWidth:0.2,
        borderColor:colors.appBlack,
        marginLeft:5
    }
})

export default styles;