import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
} from 'react-native';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import Icons from '../../assets/icons';
import { useIsFocused } from '@react-navigation/native';
import SlideView from '../../components/SlideView';
import MatchingButtons from '../../chunks/MixAndMatch/MatchingButtons';

const MixAndMatch = ({ navigation, route }) => {

    const { data, level } = route?.params

    const isFocused = useIsFocused()
    const [showInfo, setShowInfo] = useState(false)

    return (
        <SafeAreaView style={styles.mainContainer}>
            <SlideView visible={showInfo} />
            <AppHeader
                title={"Mix & Match"}
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
                    padding: 5
                }}>
                    <MatchingButtons
                        data={[
                            { id: "1", title: "image", type: "image" },
                            { id: "2", title: "مَرْحَبًا", type: "text" },
                            { id: "3", title: "audio", type: "audio", sound: `level_1_daada.mp3` },

                            { id: "3", title: "audio", type: "audio" },
                            { id: "1", title: "image", type: "image" },
                            { id: "2", title: "مَرْحَبًا", type: "text" },

                            { id: "2", title: "مَرْحَبًا", type: "text" },
                            { id: "3", title: "audio", type: "audio" },
                            { id: "1", title: "image", type: "image" },

                            { id: "3", title: "audio", type: "audio" },
                            { id: "1", title: "image", type: "image" },
                            { id: "2", title: "مَرْحَبًا", type: "text" },
                        ]}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default MixAndMatch;