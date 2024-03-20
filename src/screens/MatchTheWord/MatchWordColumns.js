import React, { useEffect, useState } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native'
import MatchButton from '../../chunks/MatchTheWord/MatchButton';
import colors from '../../utils/colors';

const MatchWordColumns = ({
    engData,
    arabicData,
    engKeyToRender,
    arabicKeyToRender,
}) => {

    const [engList, setEngList] = useState([])
    const [arabicList, setArabicList] = useState([])

    useEffect(() => {
        engData && setEngList(engData)
    }, [engData])

    useEffect(() => {
        arabicData && setArabicList(arabicData)
    }, [arabicData])


    const selectedAnswers = (item, type) => {
        let engTempData = [...engList]
        let arabicTempData = [...arabicList]
        if (type === "eng") {
            engTempData = engTempData?.map((e) => ({
                ...e,
                [`${type}Selected`]: e?.id === item?.id || e?.[`${type}Selected`]
            }))
            setEngList(engTempData)
        }
        else {
            arabicTempData = arabicTempData?.map((e) => ({
                ...e,
                [`${type}Selected`]: e?.id === item?.id || e?.[`${type}Selected`]
            }))
            setArabicList(arabicTempData)
        }
        compareAnswers(engTempData, arabicTempData)
    };
    


    const compareAnswers = (engTempData, arabicTempData) => {
        let engTempList = engTempData?.map((e) => ({
            ...e,
            correct: arabicTempData.find((element) => e?.engSelected && element?.arabicSelected && element?.id === e.id) !== undefined
        }))

        let arabicTempList = arabicTempData?.map((e) => ({
            ...e,
            correct: engTempList.find((element) => e?.arabicSelected && element?.engSelected && element?.id === e.id) !== undefined
        }))

        setEngList(engTempList)
        setArabicList(arabicTempList)
    }


    const engRenderItem = ({ item, index }) => {
        return (
            <View style={styles.renderContainer}>
                <MatchButton
                    title={item[engKeyToRender]}
                    mainStyle={[styles.matchButtonStyle, {
                        backgroundColor: item?.engSelected && item?.correct ? colors?.appGreen : item?.engSelected && item?.correct === false ? colors?.warningRed : item?.engSelected ? colors?.ApplightGray : colors?.matchwordButtonBg
                    }]}
                    onPress={() => selectedAnswers(item, "eng")}
                />
            </View>
        )
    }
    const arabicRenderItem = ({ item, index }) => {
        return (
            <View style={styles.renderContainer}>
                <MatchButton
                    title={item[arabicKeyToRender]}
                    mainStyle={[styles.matchButtonStyle, {
                        backgroundColor: item?.arabicSelected && item?.correct ? colors?.appGreen : item?.arabicSelected && item?.correct === false ? colors?.warningRed : item?.arabicSelected ? colors?.ApplightGray : colors?.matchwordButtonBg
                    }]}
                    onPress={() => selectedAnswers(item, "arabic")}
                />
            </View>
        )
    }

    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={engList}
                renderItem={engRenderItem}
                keyExtractor={(item, index) => index}
            />
            <FlatList
                data={arabicList}
                renderItem={arabicRenderItem}
                keyExtractor={(item, index) => index}
            />
        </View>
    )
}

export default MatchWordColumns

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        // justifyContent:"space-evenly"
    },
    renderContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 5,
        justifyContent: "space-evenly"
    },
    matchButtonStyle: {
        width: "98%"
    }
})