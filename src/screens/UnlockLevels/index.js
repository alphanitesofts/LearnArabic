import React from 'react';
import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';
import AppHeader from '../../components/AppHeader';
import styles from './styles';
import Icons from '../../assets/icons';
import AppButton from '../../components/AppButton';
import Images from '../../assets/images';

const upgradeString = "Upgrade to the full version in order to unlock a complete course where you will master your Arabic reading and vocabulary through Flashcards and fun games!"
const previousRestoreString = "If you have previously purchased the app, select first 'Unlock all levels', approve the purchase, then you will receive a message that you have previously purchased the app, after which you select: 'Restore Previous Purchase'. You will NOT be charged another time!"

const UnlockLevels = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ImageBackground source={Images.backGroundImage} style={{ width: "100%", height: 250, marginTop: "auto", position: "absolute", bottom: 0, }}>

            </ImageBackground>
            <AppHeader
                title={"Remove ads"}
                showBackButton={true}
                backIconSource={Icons.burgerIcon}
                navigation={navigation}
            />
            <ScrollView style={styles.scrollContainer}>
                <Text style={styles.headingText}>Unlock All Levels</Text>
                <Text style={styles.upgradeStringText}>{upgradeString}</Text>
                <AppButton
                    title={"Unlock all levels RS 3,100.00"}
                />
                <Text style={styles.upgradeStringText}>{previousRestoreString}</Text>
                <AppButton
                    title={"Restore previous purchase"}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default UnlockLevels;