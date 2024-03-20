import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    ImageBackground,
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import Icons from '../../assets/icons';
import Images from '../../assets/images';
import SlideView from '../../components/SlideView';
import DraggableFlatList from '../../chunks/RightSentence/DraggableFlatList';

const RightSentence = ({ navigation, route }) => {

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
                title={"Right Sentence"}
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
                    height: "100%",
                    padding: 10,
                    alignItems: "center"
                }}>
                    <DraggableFlatList
                        noOfColumns={5}
                        heading={`"Good evening, my name is Wael, and you?"`}
                        data={"مساء الخير، اسمي وائل، وأنت؟"}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default RightSentence;