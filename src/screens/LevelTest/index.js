import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    Text,
    ImageBackground
} from 'react-native'
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import CategorySelector from '../../chunks/Home/CategorySelector';
import RoundButton from '../../components/RoundButton';
import Images from '../../assets/images';
import SlideView from '../../components/SlideView';

const DATA = [
    { id: "1", title: "Match\nThe Word", progress: 1, disabled: false },
    { id: "2", title: "Matching\nLetter", progress: 0.9, disabled: false },
    { id: "3", title: "Mix &\nMatch", progress: 0.3, disabled: false },
    { id: "4", title: "Word\nPuzzle", progress: 0.2, disabled: false },
    { id: "5", title: "Listen &\nPick", progress: 0.5, disabled: false },
    { id: "6", title: "Missing\nWord", progress: 0.7, disabled: false },
    { id: "7", title: "Listen &\nSort", progress: 0.2, disabled: false },
    { id: "8", title: "Translate\nSentence", progress: 0.8, disabled: false },
    { id: "9", title: "A Right\nSentence", progress: 0, disabled: false },
]

const LevelTest = ({ navigation, route }) => {

    const { data, level } = route?.params

    const [showInfo, setShowInfo] = useState(false)

    return (
        <SafeAreaView style={styles.mainContainer}>
            <SlideView
                visible={showInfo}
                mainStyle={{ alignSelf: "center" }} />
            <ImageBackground source={Images.backGroundImage} style={{ width: "100%", height: 250, marginTop: "auto", position: "absolute", bottom: 0, }}>
            </ImageBackground>
            <AppHeader
                navigation={navigation}
                title={"Level Test"}
                showBackButton={true}
            />
            <View style={styles.topRowContainer}>
                <RoundButton
                    title={data?.arabic}
                    onInfoPress={() => setShowInfo(true)}
                />
                <Text style={styles.wordText}>{data?.eng}</Text>
                <CategorySelector
                    mainStyle={styles.categorySelectorStyle}
                    title={"Read &\nLearn"}
                    onPress={() => navigation.navigate("ReadAndLearn", { level: level, letter: data?.arabic })}
                />
            </View>
            <View style={styles.categoryContainer}>
                <FlatList
                    data={DATA}
                    numColumns={3}
                    contentContainerStyle={{ width: "100%" }}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <CategorySelector
                                title={item?.title}
                                progress={item?.progress}
                                showProgressBar={true}
                                disabled={item.disabled}
                                onPress={() => {
                                    if (item.id === "1") navigation.navigate("MatchTheWord", { data: data, level: level })
                                    if (item.id === "2") navigation.navigate("MatchingLetter", { data: data, level: level })
                                    if (item.id === "3") navigation.navigate("MixAndMatch", { data: data, level: level })
                                    if (item.id === "4") navigation.navigate("WordPuzzle", { data: data, level: level })
                                    if (item.id === "5") navigation.navigate("ListenAndPick", { data: data, level: level })
                                    if (item.id === "6") navigation.navigate("MissingWord", { data: data, level: level })
                                    if (item.id === "7") navigation.navigate("ListenAndSort", { data: data, level: level })
                                    if (item.id === "8") navigation.navigate("Translate", { data: data, level: level })
                                    if (item.id === "9") navigation.navigate("RightSentence", { data: data, level: level })
                                }}
                            />
                        )
                    }}
                />
            </View>

        </SafeAreaView >
    )
}

export default LevelTest
