import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Image,
    View,
    TouchableOpacity,
    Text,
    FlatList,
    ImageBackground
} from 'react-native';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import Icons from '../../assets/icons';
import { useIsFocused } from '@react-navigation/native';
import Images from '../../assets/images';
import translations from '../../translations';
import SlideView from '../../components/SlideView';
import * as Animatable from 'react-native-animatable';


const arrayOfArrays = [
    [
        { id: "1", arabic: `${translations.dal.arabic}${translations.waw.arabic}${translations.dal.arabic}`, },
        { id: "2", arabic: `${translations.dal.arabic}${translations.waw.arabic}${translations.dal.arabic}`, },
        { id: "3", arabic: `${translations.dal.arabic}${translations.waw.arabic}${translations.dal.arabic}`, },
    ],
    [
        { id: "1", arabic: translations.dal.arabic },
        { id: "2", arabic: translations.aleph.arabic },
        { id: "3", arabic: translations.dal.arabic },
    ]
]

const ListenAndPick = ({ navigation, route }) => {

    const { data, level } = route?.params

    const isFocused = useIsFocused()
    const correctAnswer = "2"

    const [list, setList] = useState([])
    const [showInfo, setShowInfo] = useState(false)
    const [animating, setAnimating] = useState(false)

    useEffect(() => {
        if (isFocused) {
            const randomIndex = Math.floor(Math.random() * arrayOfArrays.length - 1)
            randomIndex === -1 ? setList(arrayOfArrays[0]) : setList(arrayOfArrays[randomIndex])
        }
    }, [isFocused])

    const changeData = () => {
        const randomIndex = Math.floor(Math.random() * arrayOfArrays.length - 1)
        randomIndex === -1 ? setList(arrayOfArrays[0]) : setList(arrayOfArrays[randomIndex])
    }

    const handleAnimationEnd = () => {
        setAnimating(true)
        setTimeout(() => {
            setAnimating(false)
            changeData()
        }, 2000)
    };

    const renderItem = ({ item }) => {
        return (
            <Animatable.View
                animation={animating && item?.id !== correctAnswer && "fadeOutRight"}
                duration={700}
                delay={500}
            >
                <TouchableOpacity style={styles.cloudContainer}
                    onPress={() => {
                        item?.id === correctAnswer ? setList(list?.map((e) => ({ ...e, correct: item?.id === e.id ? true : false, wrongAnswer: item.id === e.id && false })))
                            :
                            setList(list?.map((e) => ({ ...e, correct: item?.id === e.id && false, wrongAnswer: item.id === e.id && true })))
                        item?.id === correctAnswer ? handleAnimationEnd() : setAnimating(false)
                    }}
                >
                    <ImageBackground
                        source={item.correct ? Images.greenCloudButton : item.wrongAnswer ? Images.redCloudButton : Images.cloudButton}
                        style={{
                            width: "100%",
                            height: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        resizeMode='contain'
                    >
                        <Text style={styles.arabicText}>{item?.arabic}</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </Animatable.View>
        )
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <SlideView visible={showInfo} />
            <ImageBackground source={Images.backGroundImage} style={{ width: "100%", height: 250, marginTop: "auto", position: "absolute", bottom: 0, }}>
            </ImageBackground>
            <ImageBackground source={Images.pinkCamel} resizeMode='contain' style={{ width: 250, height: 250, position: "absolute", marginTop: "auto", bottom: 220 }}>
            </ImageBackground>
            <AppHeader
                title={"Listen & Pick"}
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
                    alignItems: "center",
                }}>
                    <TouchableOpacity style={styles.speakerButtonContainer}
                        onPress={() => { }}
                    >
                        <Image
                            source={Icons.speakerIcon}
                            style={{
                                width: 40,
                                height: 40,
                                resizeMode: "contain",
                            }}
                        />
                    </TouchableOpacity>
                    <View style={{ width: "100%" }}>
                        <FlatList
                            data={list}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default ListenAndPick;