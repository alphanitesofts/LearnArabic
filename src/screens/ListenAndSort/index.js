import React, { useState } from 'react';
import {
    SafeAreaView,
    Image,
    View,
    TouchableOpacity,
    FlatList,
    ImageBackground
} from 'react-native';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import Icons from '../../assets/icons';
import SlideView from '../../components/SlideView';
import { useIsFocused } from '@react-navigation/native';
import translations from '../../translations';
import RoundButton from '../../components/RoundButton';
import Images from '../../assets/images';

const arrayData = [
    { id: "1", arabic: `${translations.dal.arabic}${translations.waw.arabic}${translations.ra.arabic}` },
    { id: "1", arabic: `${translations.dal.arabic}${translations.aleph.arabic}${translations.ra.arabic}` },
    { id: "1", arabic: `${translations.dal.arabic}${translations.aleph.arabic}${translations.ra.arabic}` },
]

const ListenAndSort = ({ navigation, route }) => {

    const { data, level } = route?.params

    const isFocused = useIsFocused()

    const [showInfo, setShowInfo] = useState(false)

    return (
        <SafeAreaView style={styles.mainContainer}>
            <SlideView visible={showInfo} />
            <ImageBackground source={Images.backGroundImage} style={{ width: "100%", height: 250, marginTop: "auto", position: "absolute", bottom: 0, }}>
            </ImageBackground>
            <ImageBackground source={Images.pinkMinaret} resizeMode='contain' style={{ width: 250, height: "75%", position: "absolute", left: -70, top: 140 }}>
            </ImageBackground>
            <AppHeader
                title={"Listen & Sort"}
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
                    <View style={{ width: "100%", paddingTop: 30 }}>
                        <FlatList
                            data={arrayData}
                            renderItem={({ item }) => {
                                return (
                                    <RoundButton
                                        title={item.arabic}
                                        mainStyle={styles.roundButton}
                                    />
                                )
                            }}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ListenAndSort;