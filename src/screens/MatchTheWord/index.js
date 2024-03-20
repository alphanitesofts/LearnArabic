import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    ImageBackground
} from 'react-native'
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import Icons from '../../assets/icons';
import MatchWordColumns from './MatchWordColumns';
import translations from '../../translations';
import { useIsFocused } from '@react-navigation/native';
import Images from '../../assets/images';
import SlideView from '../../components/SlideView';

const engColumn = [
    { id: "1", eng: `"duud"`, },
    { id: "2", eng: `"duu-dee"`, },
    { id: "3", eng: `"dau"`, },
    { id: "4", eng: `"daa-daa"`, },
    { id: "5", eng: `"duu-daa"`, },
    { id: "6", eng: `"daa"`, },
    { id: "7", eng: `"daa-duu"`, },
    { id: "8", eng: `"daa-di"`, },
]

const arabicColumn = [
    { id: "4", arabic: `${translations.dal.arabic}${translations.aleph.arabic}${translations.dal.arabic}${translations.aleph.arabic}` },
    { id: "1", arabic: `${translations.dal.arabic}${translations.waw.arabic}${translations.dal.arabic}` },
    { id: "7", arabic: `${translations.dal.arabic}${translations.aleph.arabic}${translations.dal.arabic}${translations.waw.arabic}` },
    { id: "3", arabic: `${translations.dal.arabic}${translations.waw.arabic}` },
    { id: "6", arabic: `${translations.dal.arabic}${translations.aleph.arabic}` },
    { id: "5", arabic: `${translations.dal.arabic}${translations.waw.arabic}${translations.dal.arabic}${translations.aleph.arabic}` },
    { id: "2", arabic: `${translations.dal.arabic}${translations.waw.arabic}${translations.dal.arabic}${translations.yaa.arabic}` },
    { id: "8", arabic: `${translations.dal.arabic}${translations.aleph.arabic}${translations.dal.arabic}${translations.yaa.arabic}` },
]

const MatchTheWord = ({ navigation, route }) => {

    const { data, level } = route?.params

    const isFocused = useIsFocused()
    const [showInfo, setShowInfo] = useState(false)

    return (
        <SafeAreaView style={styles.mainContainer}>
            <SlideView
                visible={showInfo}
                mainStyle={{ alignSelf: "center" }} />
            <ImageBackground source={Images.backGroundImage} style={{ width: "100%", height: 250, marginTop: "auto", position: "absolute", bottom: 0, }}>
            </ImageBackground>
            <AppHeader
                title={"Match the word"}
                showBackButton={true}
                backIconSource={Icons.backIcon}
                navigation={navigation}
                onInfoPress={() => setShowInfo(true)}
                showTimer={true}
                isFocused={isFocused}
                onTimerFinished={() => navigation.navigate("MatchWordFinish", { data: data, level: level })}
            />
            <View style={styles.innerContainer}>
                <View style={{
                    width: "100%",
                    padding: 10,
                    alignItems: "center"
                }}>
                    <MatchWordColumns
                        engData={engColumn}
                        arabicData={arabicColumn}
                        engKeyToRender={"eng"}
                        arabicKeyToRender={"arabic"}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default MatchTheWord;