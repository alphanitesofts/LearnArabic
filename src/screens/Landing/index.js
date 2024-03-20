import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    ImageBackground,
} from 'react-native';
import styles from './styles';
import AppButton from '../../components/AppButton';
import Images from '../../assets/images';
import Icons from '../../assets/icons';

const Landing = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ImageBackground source={Images.whiteBackgroundImage} style={{ width: "100%", height: 250, marginTop: "auto", position: "absolute", bottom: 0, }}>
            </ImageBackground>
            <View style={styles.innerContainer}>

                <View style={styles.headingContainer}>

                    <Image
                        source={Images.landingScreenCloud}
                        style={styles.cloudImageStyle}
                    />
                    <Image
                        source={Icons.lampIcon}
                        style={styles.lampIconStyle}
                    />
                    <View style={styles.headingTextContainer}>
                        <Text style={styles.mainHeading}>{`Modern Standard\nArabic`}</Text>
                        <Text style={styles.authorName}>by Nayla Chebli</Text>
                    </View>
                </View>
                <View style={{ width: "100%" }}>
                    <ImageBackground source={Images.whiteBackgroundImage} style={{ flex: 1 }}>
                        <AppButton
                            title={"Introduction"}
                            onPress={() => navigation.navigate("Introduction")}
                        />
                        <AppButton
                            title={"Learn the vowels"}
                            onPress={() => navigation.navigate("LearnVowels")}
                        />
                        <AppButton
                            title={"Learn by level"}
                            onPress={() => navigation.navigate("LearnByLevels")}
                        />
                        <AppButton
                            title={"Unlock all levels"}
                            onPress={() => navigation.navigate("UnlockLevels")}
                        />
                        <AppButton
                            title={"Order book"}
                            onPress={() => navigation.navigate("OrderBook")}
                        />
                        <AppButton
                            title={"About us"}
                            onPress={() => navigation.navigate("AboutUs")}
                        />
                    </ImageBackground>
                </View>
            </View>

        </SafeAreaView >
    )
}

export default Landing;
