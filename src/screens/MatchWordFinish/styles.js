import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.appPurple,
    },
    innerContainer: {
        width: "100%",
        paddingTop:100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    messageText:{
        fontSize:15,
        fontWeight:"800",
        color:colors.appWhite
    },
    progressContainer:{
        width:"100%",
        alignItems:'center',
        marginTop:50
    },
    progressHeadinText:{
        fontSize:16,
        marginBottom:10,
        fontWeight:"800",
        color:colors.appWhite
    },
    buttonStyle:{
        width:"70%",
        borderWidth:0
    },
    buttonContainer:{
        width:"100%",
        alignItems:'center',
        marginTop:100
    }
})

export default styles;