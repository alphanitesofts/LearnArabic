import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View
} from 'react-native';
import AppHeader from '../../components/AppHeader';
import styles from './styles';
import Icons from '../../assets/icons';
import Levels from '../../chunks/LearnByLevels/Levels';
import SlideView from '../../components/SlideView';
import letterLevels from '../../Data/LearningLevls/letters';


const LearnByLevels = ({ navigation }) => {

    const [showInfo, setShowInfo] = useState(false)

    return (
        <SafeAreaView style={styles.mainContainer}>

            <SlideView visible={showInfo} />
            <AppHeader
                title={"Learn By levels"}
                navigation={navigation}
                showBackButton={true}
                backIconSource={Icons.burgerIcon}
                onInfoPress={() => setShowInfo(true)}
            />
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Letters</Text>
            </View>
            <View style={{
                width: "100%",
                height: "90%"
            }}>
                <Levels
                    data={letterLevels}
                    navigation={navigation}
                />
            </View>
        </SafeAreaView>
    )
}
// animation={'fadeInUpBig'}
export default LearnByLevels;