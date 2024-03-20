import React from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';

const VowelsTable = ({
    headings,
    headingKeyToRender,
    data,
    noOfColumns,
    vowelKeyToRender,
    soundKeyToRender,
    nameKeyToRender,
    positionKeyToRender
}) => {

    const headingRenderItem = ({ item }) => {
        return (
            <View style={styles.headingItemContainer}>
                <Text style={styles.headingItemText}>{item[headingKeyToRender]}</Text>
            </View>
        )
    }

    const dataRenderItem = ({ item, index }) => {
        return (
            <View style={{
                width: "auto",
                flexDirection: "row"
            }}>
                <View style={styles.dataRenderContainer}>
                    <View style={styles.dataItemContainer}>
                        <Text style={styles.vowelText}>{item?.translation[vowelKeyToRender]}</Text>
                    </View>
                    <View style={styles.dataItemContainer}>
                        <Text style={styles.soundText}>{item?.translation[soundKeyToRender]}</Text>
                    </View>
                    <View style={styles.dataItemContainer}>
                        <Text style={styles.soundText}>{item?.translation[nameKeyToRender]}</Text>
                    </View>
                </View>
            </View>
        )
    }
    const shortVowelsRenderItem = ({ item, index }) => {
        return (
            <View style={{
                width: "auto",
                flexDirection: "row",
                alignItems:"center"
            }}>
                <View style={styles.dataRenderContainer}>
                    <View style={styles.dataItemContainer}>
                        <Text style={[styles.vowelText,{
                            fontSize:50,
                            fontWeight:"bold",
                        }]} allowFontScaling={false}>{item?.translation[vowelKeyToRender]}</Text>
                    </View>
                    <View style={styles.dataItemContainer}>
                        <Text style={styles.soundText}>{item?.translation[soundKeyToRender]}</Text>
                    </View>
                    <View style={styles.dataItemContainer}>
                        <Text style={styles.soundText}>{item?.translation[nameKeyToRender]}</Text>
                    </View>
                    <View style={styles.dataItemContainer}>
                        <Text style={styles.soundText}>{item?.translation[positionKeyToRender]}</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.mainContainer}>
            <FlatList
                renderItem={headingRenderItem}
                data={headings}
                keyExtractor={item => item.id}
                numColumns={noOfColumns}
                contentContainerStyle={{
                    width: "100%",
                    alignItems: "center",
                }}
                scrollEnabled={false}
            />
            <FlatList
                renderItem={noOfColumns === 4 ? shortVowelsRenderItem : dataRenderItem}
                data={data}
                keyExtractor={item => item.id}
                contentContainerStyle={{
                    flexDirection: "column",
                    width: "100%",
                    alignItems: "center",
                    marginTop: 20
                }}
                scrollEnabled={false}
            />
        </View>
    )
}

export default VowelsTable;

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        alignItems: "center",
        marginTop: 20,
    },
    headingItemContainer: {
        width: 80,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderColor: colors.appBlack,
        paddingVertical: 10
    },
    headingItemText: {
        fontSize: 16,
        fontWeight: "600",
        color: colors.appBlack
    },
    dataRenderContainer: {
        width: 300,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderBottomWidth: 1,
        borderColor: colors.appBlack
    },
    dataItemContainer: {
        width: 80,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    vowelText: {
        color: colors.appDarkGreen,
        fontSize: 30,
        textAlign: 'right', // Adjust the text alignment as needed
        writingDirection: 'rtl', // Set the writing direction to right-to-left
        fontFamily: fonts.NotoNaskhArabicBold,
    },
    soundText: {
        color: colors.appBlack,
        fontSize: 16,
        fontWeight: "400",
        textAlign: "center"
    }
})