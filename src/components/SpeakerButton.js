import React from 'react';
import {
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import colors from '../utils/colors';
import Icons from '../assets/icons';

const SpeakerButton = ({
    onPress,
    disabled,
    mainStyle,
    needPink
}) => {
    return (
        <TouchableOpacity style={[styles.speakerButton, mainStyle, {
            backgroundColor: needPink ? colors.appLightPink : colors.appBorder,
            borderColor: needPink ? colors.appDarkPink : colors.appBlack,
        }]}
            onPress={onPress}
            disabled={disabled}
        >
            <Image
                source={Icons.speakerIcon}
                style={{
                    width: 20,
                    height: 20,
                    resizeMode: "contain",
                }}
            />
        </TouchableOpacity>
    )
}

export default SpeakerButton

const styles = StyleSheet.create({
    speakerButton: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        borderWidth: 0.2,
    }
})