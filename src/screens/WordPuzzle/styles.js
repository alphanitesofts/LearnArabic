import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.appWhite
    },
    innerContainer: {
        width: "100%",
        height:"100%",
    },
    speakerButtonContainer: {
        width: 40,
        height: 40,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: colors.appDarkPink,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.appLightPink
    },
    cloudImage: {
        width: "100%",
        height: 300,
        resizeMode: "contain",
        tintColor: colors.appSkyeBlue,
        marginTop: -50
    },
    wordText: {
        color: colors.appBlack,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    renderContainer: {
        flex: 1,
        alignSelf: "center",
        marginVertical: 20,
        marginHorizontal: 10
    },
    selectedTextContainer: {
        minWidth: 100,
        flexDirection:"row-reverse",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 100,
        left: 0,
        right: 0,
        writingDirection:"rtl"
    },
    selectedTextStyle: {
        color: colors.appBlack,
        fontSize: 40,
        textAlign: 'right', // Adjust the text alignment as needed
        writingDirection: 'rtl', // Set the writing direction to right-to-left
        fontFamily: 'Arial'
    },
    pinkLampIconStyle:{
        width:80,
        height:60,
        resizeMode:"contain",
        marginLeft:"auto",
        marginRight:10,
        marginTop:-50
    }
})

export default styles;