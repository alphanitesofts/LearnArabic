import React from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';
import colors from '../../utils/colors';

const Vowels = ({
    title,
    alphabet,
    data,
    noOfColumns,
    mainStyle,
}) => {

    const renderItem = ({ item, index }) => {
        const splitEngLetter = item?.engLetter?.split("")
        return (
            <View style={styles.renderContainer}>
                {item?.diacritical && <Text style={[styles.diacriticalText, { color: colors.appDarkGreen }]}>{`${item?.diacritical}`}</Text>}
                <Text style={[styles.arabicText, { color: colors.appDarkGreen }]}>{`${item?.arabicLetter[0]}`}{item?.arabicLetter[1] && <Text style={{ color: colors.appBlack }}>{item?.arabicLetter[1]}</Text>}</Text>
                <Text style={[styles.engletterText, { color: colors.appDarkGreen }]}>{splitEngLetter[0]}
                    {splitEngLetter[1] && <Text style={{ color: colors.appBlack }}>{`${splitEngLetter[1]}`}
                        {splitEngLetter[2] && <Text style={{ color: colors.appBlack }}>{splitEngLetter[2]}</Text>}</Text>}</Text>
            </View>
        )
    }

    return (
        <View style={[styles.mainContainer, mainStyle]}>
            <Text style={styles.title}>The<Text style={styles.alphabetText}>{" " + alphabet + " "}</Text>{title}</Text>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                numColumns={noOfColumns}
                contentContainerStyle={{ width: "100%" }}
            />
        </View>
    )
}

export default Vowels;

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        alignItems: "center"
    },
    title: {
        fontSize: 30,
        color: colors.appBlack,
        fontFamily: 'Arial',
        marginVertical: 10
    },
    alphabetText: {
        fontSize: 58,
        color: colors.appDarkGreen,
        writingDirection: "rtl"
    },
    renderContainer: {
        width: 80,
        paddingVertical: 10,
        alignItems: "center",
        borderWidth: 1,
        borderColor: colors.appBorder,
        marginHorizontal: 2
    },
    diacriticalText: {
        fontSize: 30,
        textAlign: 'right', // Adjust the text alignment as needed
        writingDirection: 'rtl', // Set the writing direction to right-to-left
        fontFamily: 'Arial'
    },
    arabicText: {
        fontSize: 30,
        textAlign: 'right', // Adjust the text alignment as needed
        writingDirection: 'rtl', // Set the writing direction to right-to-left
        fontFamily: 'Arial'
    },
    engletterText: {
        fontSize: 30,
        color: colors.appBlack,
        fontWeight: "500",
        marginTop: 15
    }
})