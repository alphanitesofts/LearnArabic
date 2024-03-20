import React, { useEffect, useState } from 'react';
import {
    ImageBackground,
    SafeAreaView,
    View
} from 'react-native';
import AppHeader from '../../components/AppHeader';
import Icons from '../../assets/icons';
import styles from './styles';
import ReadCard from '../../chunks/ReadAndLearn/ReadCard';
import translations from '../../translations';
import colors from '../../utils/colors';
import Images from '../../assets/images';
import SlideView from '../../components/SlideView';
import read_and_learn1 from '../../Data/Level1/daal/read_and_learn';



const ReadAndLearn = ({ navigation, route }) => {

    const { level, letter } = route?.params

    const [showSelected, setShowSelected] = useState(false)
    const [showEng, setShowEng] = useState(false)
    const [showInfo, setShowInfo] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        level === 1 && letter === translations?.dal?.arabic && setData(read_and_learn1?.data)
    }, [level, letter])

    return (
        <SafeAreaView style={styles.mainContainer}>
            <SlideView
                visible={showInfo}
                mainStyle={{ alignSelf: "center" }} />
            <ImageBackground source={Images.backGroundImage} style={{ width: "100%", height: 250, marginTop: "auto", position: "absolute", bottom: 0, }}>
            </ImageBackground>
            <AppHeader
                title={"Read And Learn"}
                navigation={navigation}
                backIconSource={Icons.backIcon}
                showBackButton={true}
                onInfoPress={() => setShowInfo(true)}
                showRightContainer={true}
                refreshTintColor={showEng ? colors.appDarkGreen : colors.appWhite}
                starTintColor={showSelected ? colors.appDarkGreen : colors.appWhite}
                onRefressPress={() => setShowEng(!showEng)}
                onStarPress={() => setShowSelected(!showSelected)}
            />
            <View style={styles.innerContainer}>
                <View style={{
                    width: "100%",
                    height: "90%",
                    padding: 5
                }}>
                    <ReadCard
                        data={data}
                        arabicKeyToRender={"arabic"}
                        engKeyToRender={"eng"}
                        showEng={showEng}
                        showSelected={showSelected}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ReadAndLearn;