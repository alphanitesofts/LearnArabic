import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        
        backgroundColor: colors.appPinkBg,
        alignItems: "center"
    },
    innerContainer: {
        width: "100%",
        padding: 10,
        alignItems: "center",
    },
    headingContainer: {
        width: "100%",
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 20
    },
    mainHeading: {
        fontSize: 30,
        fontWeight: "500",
        color: colors.appBlack,
        textAlign: "center",
    },
    authorName: {
        textAlign: "center",
        color: colors.appBorder,
        fontSize: 24,
    },
    cloudImageStyle: {
        width: "100%",
        height: 200,
        resizeMode: "stretch"
    },
    lampIconStyle: {
        width: 100,
        height: 80,
        resizeMode: "contain",
        marginLeft:"auto",
        marginRight:50,
        marginTop:-30
    },
    headingTextContainer:{
        width:"100%",
        position:"absolute",
        top:40
    }
})

export default styles;