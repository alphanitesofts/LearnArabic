import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image
} from 'react-native'
import colors from '../../utils/colors';
import Icons from '../../assets/icons';
import * as Progress from 'react-native-progress';

const CategorySelector = ({
    title,
    progress,
    mainStyle,
    showProgressBar,
    onPress,
    disabled
}) => {
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={[styles.mainContainer, mainStyle]} disabled={disabled} onPress={onPress}>
                {disabled && <View style={styles.shadowContainer}></View>}
                {showProgressBar && <Progress.Bar progress={progress} width={100} color={colors.appDarkGreen} />}
                <Image
                    source={Icons.fourTiles}
                    style={{
                        width: 40,
                        height: 25,
                        resizeMode: "contain",
                        tintColor: colors.appBlack,
                        marginVertical: 10
                    }}
                />
                <Text style={styles.titleText}>{title?.toUpperCase()}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CategorySelector

const styles = StyleSheet.create({
    mainContainer: {
        width: "auto",
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: colors.categorySelectorGray,
        borderColor: colors.appBorder,
        alignItems: "center",
        marginBottom: 20,
        marginRight: 10,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation:5
    },
    titleText: {
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
        color:colors.appBlack
    },
    shadowContainer: {
        width: "110%",
        height: "121%",
        position: "absolute",
        zIndex: 1,
        top:1,
        backgroundColor: "rgba(128,128,128,0.4)",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
})