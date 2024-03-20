import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    ImageBackground,
    Image
} from 'react-native';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import { useIsFocused } from '@react-navigation/native';
import Icons from '../../assets/icons';
import Images from '../../assets/images';
import SlideView from '../../components/SlideView';
import SpeakerButton from '../../components/SpeakerButton';
import translations from '../../translations';
import RoundButton from '../../components/RoundButton';

const MissingWord = ({ navigation, route }) => {

    const { data, level } = route?.params

    const isFocused = useIsFocused()
    const [showInfo, setShowInfo] = useState(false)
    const [selectedCorrectAnswer, setSelectedCorrectAnswer] = useState("")

    return (
        <SafeAreaView style={styles.mainContainer}>
            <SlideView
                visible={showInfo}
                mainStyle={{ alignSelf: "center" }} />
            <ImageBackground source={Images.backGroundImage} style={{ width: "100%", height: 250, marginTop: "auto", position: "absolute", bottom: 0, }}>
            </ImageBackground>
            <AppHeader
                title={"Missing Word"}
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
                    paddingHorizontal: 10,
                    alignItems: "center"
                }}>
                    <Image
                        source={Images.pinkCloud}
                        style={styles.pinkCloudContainer}
                    />

                    <View style={styles.rowContainer}>
                        <SpeakerButton />
                        {selectedCorrectAnswer ? <Text style={styles.guessWord}>{`${translations.dal.arabic}${translations.waw.arabic}${selectedCorrectAnswer}${translations.yaa.arabic}`}</Text>
                            :
                            <Text style={styles.guessWord}>{`${translations.dal.arabic}${translations.waw.arabic}`} <View style={styles.lineContainer}></View> {`${translations.yaa.arabic}`}</Text>}
                    </View>
                    <RoundButton
                        title={`${translations.dal.arabic} ${translations.waw.arabic}`}
                        mainStyle={styles.roundButton}
                    />
                    <RoundButton
                        title={`${translations.dal.arabic} ${translations.waw.arabic}`}
                        mainStyle={styles.roundButton}
                    />
                    <RoundButton
                        title={`${translations.dal.arabic} ${translations.waw.arabic}`}
                        mainStyle={styles.roundButton}
                    />
                    <RoundButton
                        title={`${translations.dal.arabic} ${translations.waw.arabic}`}
                        mainStyle={styles.roundButton}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default MissingWord;