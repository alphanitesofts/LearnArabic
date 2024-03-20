import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ImageBackground,
    Text,
    View,
    TouchableOpacity,
    Image,
    Modal,
} from 'react-native';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import Icons from '../../assets/icons';
import colors from '../../utils/colors';
import Sound from 'react-native-sound';
import Vowels from '../../chunks/Learn/Vowels';
import translations from '../../translations';
import { diacritics } from '../../diacritics';
import Images from '../../assets/images';

const Learn = ({ navigation }) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [soundFile, setSoundFile] = useState(null);
    const [showModal, setShowModal] = useState(false)


    useEffect(() => {
        // Load the sound file when the component mounts
        const soundObject = new Sound('sound.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('Error loading sound', error);
            } else {
                setSoundFile(soundObject);
            }
        });

        // Unload the sound when the component unmounts
        return () => {
            if (soundFile) {
                soundFile.release();
            }
        };
    }, []);

    const playSound = () => {
        setIsPlaying(true)
        if (soundFile) {
            soundFile.play((success) => {
                if (success) {
                    console.log('Sound played successfully');
                } else {
                    console.log('Error playing sound');
                }
            });
        }
    };

    const pauseSound = () => {
        setIsPlaying(false)
        if (soundFile) {
            soundFile.pause(() => {
                console.log('Sound paused');
            });
        }
    };



    return (
        <SafeAreaView style={styles.mainContainer}>

            <ImageBackground source={Images.backGroundImage} style={{ width: "100%", height: 250, marginTop: "auto", position: "absolute", bottom: 0, }}>
            </ImageBackground>
            <AppHeader
                title={"Learn"}
                navigation={navigation}
                showBackButton={true}
                backIconSource={Icons.backIcon}
            />
            <View style={styles.innerContainer}>
                <View style={styles.topRowContainer}>
                    <Text style={styles.alphabetText}>d : </Text>
                    <Text style={styles.arabicText}>{translations.dal.arabic}</Text>
                    <TouchableOpacity style={styles.speakerButtonContainer} onPress={() => {
                        if (isPlaying) pauseSound()
                        else playSound()
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

                <Vowels
                    title={'with Long Vowels'}
                    alphabet={'\u062F'}
                    noOfColumns={3}
                    data={[
                        { id: "dee", arabicLetter: [translations.dal.arabic, translations?.yaa?.arabic], engLetter: 'dee' },
                        { id: "duu", arabicLetter: [translations?.dal?.arabic, translations?.waw?.arabic], engLetter: 'duu' },
                        { id: "daa", arabicLetter: [translations?.dal?.arabic, translations?.aleph?.arabic], engLetter: 'daa' },
                    ]}
                />

                <Vowels
                    title={'with Short Vowels'}
                    alphabet={translations?.dal?.arabic}
                    noOfColumns={4}
                    data={[
                        { id: "d", diacritical: diacritics?.sukun_in_circle, arabicLetter: [translations.dal?.arabic], engLetter: 'd' },
                        { id: "de", diacritical: diacritics?.sukun_in_circle, arabicLetter: [translations.dal?.arabic], engLetter: 'de' },
                        { id: "du", diacritical: diacritics?.sukun_in_circle, arabicLetter: [translations.dal?.arabic], engLetter: 'du' },
                        { id: "da", diacritical: diacritics?.sukun_in_circle, arabicLetter: [translations.dal?.arabic], engLetter: 'da' },

                    ]}
                />
            </View>
            <TouchableOpacity style={styles.watchButton} onPress={() => setShowModal(true)}>
                <Text style={styles.watchButtonText}>WATCH THE WRITING INSTRUCTIONS</Text>
            </TouchableOpacity>
            <Modal visible={showModal} animationType="slide">
                <SafeAreaView style={{ flex: 1, backgroundColor: colors.appWhite }}>
                    <View style={{
                        width: "100%",
                        backgroundColor:colors.appWhite,
                        padding:10,
                        shadowColor: '#171717',
                        shadowOffset: { width: -2, height: 4 },
                        shadowOpacity: 0.3,
                        shadowRadius: 3,
                        elevation: 15
                    }}>
                        <TouchableOpacity style={{
                            width:40,
                            height:40,
                            backgroundColor:colors.categorySelectorGray,
                            alignSelf:"flex-end",
                            alignItems:"center",
                            justifyContent:"center",
                            borderRadius:5
                        }} onPress={()=>setShowModal(false)}>
                            <Image
                                source={Icons.crossIcon}
                                style={{
                                    width:15,
                                    height:15,
                                    resizeMode:"contain"
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </Modal>
        </SafeAreaView>
    )
}

export default Learn;