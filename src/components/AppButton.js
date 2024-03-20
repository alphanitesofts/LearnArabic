import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'
import colors from '../utils/colors';

const AppButton = ({
    title,
    mainStyle,
    onPress,
    textColor,
    titleLowerCase
}) => {
    return (
        <TouchableOpacity style={[styles.mainContainer, mainStyle]} onPress={onPress}>
            <Text style={[styles.titleText, { color: textColor || colors.appBlack }]}>{titleLowerCase ? title : title?.toUpperCase()}</Text>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        minHeight: 50,
        padding: 10,
        alignItems: "center",
        borderRadius: 10,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.appBlack,
        backgroundColor: colors.appButtonBg,
        justifyContent: "center",
        marginBottom: 15,
    },
    titleText: {
        color: colors.appBlack,
        fontSize: 16,
        fontWeight: "500",
    }
})