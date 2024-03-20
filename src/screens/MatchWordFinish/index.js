import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ImageBackground
} from 'react-native';
import styles from './styles';
import * as Progress from 'react-native-progress';
import colors from '../../utils/colors';
import AppButton from '../../components/AppButton';
import Images from '../../assets/images';

const MatchWordFinish = ({ navigation, route }) => {

    const { data, level } = route?.params

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ImageBackground source={Images.whiteBackgroundImage} style={{ width: "100%", height: 250, marginTop: "auto", position: "absolute", bottom: 0, }}>
            </ImageBackground>
            <View style={styles.innerContainer}>
                <Text style={styles.messageText}>"Good job! You got 10 right out of 13!"</Text>
                <View style={styles.progressContainer}>
                    <Text style={styles.progressHeadinText}>Overall Progress</Text>
                    <Progress.Bar progress={0.7} width={150} height={12} borderColor={colors.appWhite} borderRadius={10} color={colors.appDarkGreen} />
                </View>
                <View style={styles.buttonContainer}>
                    <AppButton
                        title={"Play Again"}
                        mainStyle={styles.buttonStyle}
                        onPress={() => navigation.goBack()}
                    />
                    <AppButton
                        title={"Back"}
                        mainStyle={styles.buttonStyle}
                        onPress={() => navigation.navigate("LevelTest", { data: data, level: level })}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default MatchWordFinish;