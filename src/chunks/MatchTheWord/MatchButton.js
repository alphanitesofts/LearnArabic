import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import colors from '../../utils/colors';

const MatchButton = ({
    title,
    titleAllCaps,
    onPress,
    mainStyle
}) => {
    return (
        <TouchableOpacity style={[styles.mainContainer, mainStyle]}onPress={onPress}>
            <Text style={styles.titleText}>{titleAllCaps ? title?.toUpperCase() : title}</Text>
        </TouchableOpacity>
    )
}

export default MatchButton

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "#F5F5F5",
        borderWidth: 1,
        borderColor: colors.appBorder,
        borderRadius: 2,
        justifyContent: "center",
        shadowColor: "#171717",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 3.84,

        elevation: 5,
    },
    titleText: {
        fontSize:20,
        color: colors.appBlack,
        textAlign: "center",
        fontFamily: "Arial"
    }
})