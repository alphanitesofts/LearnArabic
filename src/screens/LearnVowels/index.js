import React, { useEffect, useState } from 'react';
import {
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import AppHeader from '../../components/AppHeader';
import styles from './styles';
import Icons from '../../assets/icons';
import VowelsTable from '../../chunks/LearnVowels/VowelsTable';
import Sound from 'react-native-sound';
import translations from '../../translations';
import { diacritics } from '../../diacritics';
import Images from '../../assets/images';

const LearnVowels = ({ navigation }) => {

    const [isPlaying, setIsPlaying] = useState(false)

    const loadSound = (sound) => {
        console.log("sound==>>",sound)
        
        setIsPlaying(true)
        const soundObject = new Sound(`${sound}`, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                setIsPlaying(false)
                console.log('Error loading sound', error);
            } else {
                if (sound) playSound(soundObject)
            }
        });

        // Unload the sound when the component unmounts
        // return () => {
        //     if (sound) {
        //         sound?.release();
        //     }
        // };

    };

    const playSound = (sound) => {
        if (sound) {
            sound.play((success) => {
                if (success) {
                    setIsPlaying(false)
                    console.log('Sound played successfully');
                } else {
                    setIsPlaying(false)
                    console.log('Error playing sound');
                }
            });
        }
    }


    return (

        <SafeAreaView style={styles.mainContainer}>

            <AppHeader
                title={"Learn the vowels"}
                showBackButton={true}
                backIconSource={Icons.burgerIcon}
                navigation={navigation}
            />

            <ImageBackground source={Images.backGroundImage} style={{ width: "100%", height: 250, marginTop: "auto", position: "absolute", bottom: 0, }}>

            </ImageBackground>

            <ScrollView>

                <View style={styles.innerContainer}>


                    <Text style={styles.headingText}>In Arabic, there are</Text>
                    <View style={styles.rowContainer}>
                        <Text style={styles.headingSecondLineText}>3 <Text style={styles.greenText}>'LONG'</Text> Vowels </Text>
                        <TouchableOpacity style={styles.speakerButtonContainer} onPress={() => {
                            if (isPlaying) return
                            else loadSound(`long_vowels.mp3`)
                        }}>
                            <Image
                                source={Icons.speakerIcon}
                                style={{
                                    width: 20,
                                    height: 20,
                                    resizeMode: "contain",
                                }}
                            />
                        </TouchableOpacity>
                    </View>

                    <VowelsTable
                        headings={[
                            { id: "1", label: "Vowel" },
                            { id: "2", label: "Sound" },
                            { id: "3", label: "Name" },
                        ]}
                        data={
                            [
                                { id: "1", translation: { vowel: translations?.aleph?.arabic, sound: "aa", name: "`alif`" } },
                                { id: "1", translation: { vowel: translations?.waw?.arabic, sound: "00", name: "`wow`" } },
                                { id: "1", translation: { vowel: translations?.yaa?.arabic, sound: "ee", name: "`yaa`" } },

                            ]}
                        vowelKeyToRender={"vowel"}
                        soundKeyToRender={"sound"}
                        nameKeyToRender={"name"}
                        headingKeyToRender={"label"}
                        noOfColumns={3}
                    />

                    <Text style={[styles.headingSecondLineText, { marginTop: 40 }]}>And 4 <Text style={styles.greenText}>'SHORT'</Text> Vowels </Text>
                    <View style={[styles.rowContainer]}>
                        <Text style={styles.headingSecondLineText}>in the form of texts</Text>
                        <TouchableOpacity style={styles.speakerButtonContainer} onPress={() => {
                            if (isPlaying) return
                            else loadSound(`short_vowels.mp3`)
                        }}>
                            <Image
                                source={Icons.speakerIcon}
                                style={{
                                    width: 20,
                                    height: 20,
                                    resizeMode: "contain",
                                }}
                            />
                        </TouchableOpacity>
                    </View>

                    <VowelsTable
                        headings={[
                            { id: "1", label: "Accent" },
                            { id: "2", label: "Sound" },
                            { id: "3", label: "Name" },
                            { id: "4", label: "Position" },
                        ]}
                        data={
                            [
                                { id: "1", translation: { vowel: diacritics?.fatha, sound: "a", name: "`fat-Ha`", position: "above" } },
                                { id: "2", translation: { vowel: diacritics?.damma, sound: "u", name: "damma", position: "above letter" } },
                                { id: "3", translation: { vowel: diacritics?.kasra, sound: "e", name: "`kasra`", position: "under letter" } },
                                { id: "3", translation: { vowel: diacritics?.sukun, sound: "silent", name: "`sukoon`", position: "above letter" } },

                            ]}
                        vowelKeyToRender={"vowel"}
                        soundKeyToRender={"sound"}
                        nameKeyToRender={"name"}
                        headingKeyToRender={"label"}
                        positionKeyToRender={"position"}
                        noOfColumns={4}
                    />

                </View>
            </ScrollView>


        </SafeAreaView >
    )
}

export default LearnVowels;