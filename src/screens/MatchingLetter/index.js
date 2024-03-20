import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    Text,
    ImageBackground,
    Image
} from 'react-native';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import Images from '../../assets/images';
import Icons from '../../assets/icons';
import { useIsFocused } from '@react-navigation/native';
import SlideView from '../../components/SlideView';
import translations from '../../translations';
import RoundButton from '../../components/RoundButton';
import colors from '../../utils/colors';

const arrayData = [
    { id: "4", arabic: translations.ra.arabic },
    { id: "3", arabic: translations.dal.arabic },
    { id: "2", arabic: translations.za.arabic },
    { id: "1", arabic: translations.aleph.arabic },
]

const MatchingLetter = ({ navigation, route }) => {

    const { data, level } = route?.params

    const correctAnswer = `${translations.dal.arabic}`
    const isFocused = useIsFocused()
    const [showInfo, setShowInfo] = useState(false)
    const [options, setOptions] = useState([])
    const [selectedCorrectAnswer, setSelectedCorrectAnswer] = useState("")


    useEffect(() => {
        arrayData && setOptions(arrayData)
    }, [arrayData])

    useEffect(() => {
        setSelectedCorrectAnswer(`${options?.filter((e) => e.correct)?.map((item) => item?.arabic)}`)
    }, [options])

    const renderItem = ({ item }) => {
        return (
            <View style={styles.renderContainer}>
                <RoundButton
                    title={item.arabic}
                    onPress={() => {
                        setOptions(options?.map((e) => ({
                            ...e,
                            correct: (e.id === item.id && e.arabic === correctAnswer) ? true : false,
                            wrong: (e.id === item.id && e.arabic !== correctAnswer) ? true : false,
                        })))
                    }}
                    mainStyle={{
                        backgroundColor: item?.correct ? colors.appGreen : item?.wrong ? colors.warningRed : colors.appButtonBg
                    }}
                    disabled={selectedCorrectAnswer?.length > 0}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <SlideView visible={showInfo} />
            <ImageBackground source={Images.backGroundImage} style={{ width: "100%", height: 250, marginTop: "auto", position: "absolute", bottom: 0, }}>
            </ImageBackground>
            <AppHeader
                title={"Matching Letter"}
                showBackButton={true}
                backIconSource={Icons.backIcon}
                navigation={navigation}
                onInfoPress={() => setShowInfo(true)}
                showTimer={true}
                isFocused={isFocused}
                onTimerFinished={() => navigation.navigate("MatchWordFinish", { data: data, level: level })}
            />
            <View style={styles.innerContainer}>
                <View style={styles.secondryInnerContainer}>
                    <View style={styles.imageContainer}>
                        <View style={styles.innerImageContainer}>
                            <Image
                                source={Images.sparrowImage}
                                style={styles.categoryImage}
                            />
                        </View>
                    </View>
                    {selectedCorrectAnswer ? <Text style={styles.guessWord}>{`${translations.dal.arabic}${translations.waw.arabic}${selectedCorrectAnswer}${translations.yaa.arabic}`}</Text>
                        :
                        <Text style={styles.guessWord}>{`${translations.dal.arabic}${translations.waw.arabic}`} <View style={styles.roundContainer}></View> {`${translations.yaa.arabic}`}</Text>}
                    <View style={{ width: "100%" }}>
                        <FlatList
                            data={options}
                            numColumns={4}
                            contentContainerStyle={{ width: "100%" }}
                            renderItem={renderItem}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default MatchingLetter;