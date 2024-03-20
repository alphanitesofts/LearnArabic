import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'
import colors from '../utils/colors';
import Icons from '../assets/icons';

const RoundButton = ({
    title,
    mainStyle,
    onPress,
    textColor,
    onInfoPress,
    disabled
}) => {
    return (
        <TouchableOpacity style={[styles.mainContainer, mainStyle]} onPress={onPress} disabled={disabled}>
            {onInfoPress && <TouchableOpacity style={styles.infoButton} onPress={onInfoPress}>
                <Image
                    source={Icons.infoIcon}
                    style={{ width: 20, height: 20, resizeMode: "contain", tintColor: colors.appWhite }}
                />
            </TouchableOpacity>}
            <Text style={[styles.titleText, { color: textColor || colors.appBlack }]}>{title?.toUpperCase()}</Text>
        </TouchableOpacity>
    )
}

export default RoundButton

const styles = StyleSheet.create({
    mainContainer: {
        width: 80,
        height: 80,
        padding: 10,
        alignItems: "center",
        borderRadius: 100,
        backgroundColor: colors.appButtonBg,
        justifyContent: "center",
        borderWidth:1,
        borderColor:colors.appBorder
    },
    titleText: {
        color: colors.appBlack,
        fontSize: 40,
        textAlign: 'right', // Adjust the text alignment as needed
        writingDirection: 'rtl', // Set the writing direction to right-to-left
        fontFamily: 'Arial'
    },
    infoButton: {
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.appLightPink,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: colors.appDarkPink,
        position: "absolute",
        top: 0,
        right: 1,
        zIndex: 1
    }
})