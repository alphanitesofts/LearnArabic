import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.appWhite
    },
    innerContainer: {
        width: "100%",
        padding: 5,
    },
    topRowContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    alphabetText: {
        color:colors?.appBlack,
        fontSize: 40,
        fontWeight: "500"
    },
    arabicText: {
        color: colors.appDarkGreen, writingDirection: 'rtl',
        fontSize: 40,
        fontWeight: "500",
        fontFamily: 'Arial'
    },
    speakerButtonContainer: {
        width: 40,
        height: 40,
        backgroundColor: colors.appBorder,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        borderWidth: 0.2,
        borderColor: colors.appBlack,
        marginLeft: 10
    },
    watchButton: {
        width: "95%",
        alignSelf:"center",
        backgroundColor: colors.appWhite,
        height: 40,
        marginTop: "auto",
        marginBottom: 20,
        elevation: 5,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
        borderRadius:5,
        borderWidth:1,
        borderColor:colors.appBorder,
        alignItems:"center",
        justifyContent:"center"
    },
    watchButtonText:{
        color:colors.appBlack,
        fontWeight:"600"
    }
})

export default styles;