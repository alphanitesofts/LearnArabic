import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor:colors.appWhite
    },
    scrollContainer: {
        width: "100%",
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    rowContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center"
    },
    orderContainer: {
        width: "48%",
        height: 250,
    },
    bookName:{
        fontSize:24,
        fontWeight:"bold",
        color:colors.appBlack,
    },
    orderButtonContainer:{
        width:"100%",
        padding:10,
        alignItems:"center",
        borderWidth:1,
        borderColor:colors.appBorder,
        backgroundColor:"#ebebeb",
        marginVertical:5
    },
    orderButtonText:{
        color:colors.appBlack,
        fontSize:24,
    },
    contentText: {
        color: colors.appBlack,
        fontSize: 15,
        lineHeight: 30,
        marginTop:10
    },
})

export default styles;