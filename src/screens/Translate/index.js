import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    Text,
    ImageBackground,
} from 'react-native';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import Icons from '../../assets/icons';
import Images from '../../assets/images';
import { useIsFocused } from '@react-navigation/native';
import SlideView from '../../components/SlideView';
import AppButton from '../../components/AppButton';
import colors from '../../utils/colors';

const arrayData = [
    { id: "1", text: "Hello, I'm Jasmine. What's your name?" },
    { id: "2", text: "Welcome, Jasmine. Thats's not your name?" },
    { id: "3", text: "Welcome, Jasmine. That's your name?" },
]

const Translate = ({ navigation, route }) => {

    const { data, level } = route?.params

    const correctAnswer = "1"
    const isFocused = useIsFocused()
    const [showInfo, setShowInfo] = useState(false)
    const [options, setOptions] = useState(arrayData)

    useEffect(() => {
        isFocused && setOptions(arrayData)
    }, [])

    return (
        <SafeAreaView style={styles.mainContainer}>
            <SlideView
                visible={showInfo}
                mainStyle={{ alignSelf: "center" }} />
            <ImageBackground source={Images.backGroundImage} style={{ width: "100%", height: 250, marginTop: "auto", position: "absolute", bottom: 0, }}>
            </ImageBackground>
            <AppHeader
                title={"Translate Sentence"}
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
                    <Text style={styles.arabicText}>مرحبًا، أنا ياسمين. ما اسمك؟</Text>
                    <FlatList
                        data={options}
                        renderItem={({ item }) => {
                            return (
                                <AppButton
                                    title={item?.text}
                                    mainStyle={{ width: "95%", backgroundColor: item?.correct ? colors.appDarkGreen : item?.wrongAnswer ? colors.warningRed : colors.appButtonBg, alignSelf: "center" }}
                                    titleLowerCase={true}
                                    onPress={() => {
                                        item?.id === correctAnswer ? setOptions(options?.map((e) => ({
                                            ...e,
                                            correct: item?.id === e.id ? true : false,
                                            wrongAnswer: item.id === e.id && false
                                        })))
                                            :
                                            setOptions(options?.map((e) => ({
                                                ...e,
                                                correct: item?.id === e.id && false,
                                                wrongAnswer: item.id === e.id && true
                                            })))
                                    }}
                                />
                            )
                        }}
                        contentContainerStyle={{ marginTop: 50 }}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Translate;