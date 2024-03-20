import React, { useState, useEffect } from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import colors from '../utils/colors';
import Icons from '../assets/icons';
import * as Progress from 'react-native-progress';
import Sound from 'react-native-sound';

const AppHeader = ({
    navigation,
    title,
    showBackButton,
    onInfoPress,
    showTimer,
    backIconSource,
    tintColor,
    showRightContainer,
    onRefressPress,
    onExchangePress,
    onStarPress,
    refreshTintColor,
    starTintColor,
    onTimerFinished,
    isFocused,
    score
}) => {

    const [seconds, setSeconds] = useState(60);
    const [isTimerRunning, setIsTimerRunning] = useState(true);
    const [soundFile, setSoundFile] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // Load the sound file when the component mounts
        const soundObject = new Sound(Platform.OS==="android"?'tickingsound.mp3': 'tickingSound.mp3', Sound.MAIN_BUNDLE, (error) => {
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

    useEffect(() => {
        if (isFocused ) setIsTimerRunning(true)
    }, [isFocused])

    useEffect(() => {
        let interval;
        if (isTimerRunning && showTimer) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => {
                    if (prevSeconds === 0) {
                        onTimerFinished && onTimerFinished()
                        clearInterval(interval);
                        setIsTimerRunning(false);
                        return 60; // Reset the timer
                    } else {
                        return prevSeconds - 1;
                    }
                });
            }, 1000);

        }

        // Clear the interval when the component is unmounted
        return () => clearInterval(interval);
    }, [isTimerRunning]);

    useEffect(() => {
        if (seconds === 10) playSound()
        if (seconds === 0) pauseSound()
    }, [seconds])

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
                return
            });
        }
    };

    return (
        <View style={styles.mainContainer}>
            {showBackButton && <TouchableOpacity style={styles.backButtonContainer} onPress={() => navigation.goBack()}>
                <Image
                    source={backIconSource || Icons.backIcon}
                    style={[styles.backIcon, { tintColor: tintColor ? tintColor : colors.appWhite }]}
                />
            </TouchableOpacity>}
            {onInfoPress && <TouchableOpacity style={styles.infoButtonContainer} onPress={onInfoPress}>
                <Image
                    source={Icons.infoIcon}
                    style={styles.backIcon}
                />
            </TouchableOpacity>}
            <Text style={styles.titlText}>{title?.toUpperCase()}</Text>
            {showRightContainer && <View style={styles.rightRowContainer}>
                <TouchableOpacity style={styles.rightImageButton} onPress={onRefressPress}>
                    <Image
                        source={Icons.refreshArrowIcon}
                        style={[styles.backIcon, { tintColor: refreshTintColor ? refreshTintColor : colors.appWhite }]}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightImageButton} onPress={onExchangePress}>
                    <Image
                        source={Icons.exchangeIcon}
                        style={styles.backIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightImageButton} onPress={onStarPress}>
                    <Image
                        source={Icons.filledStar}
                        style={[styles.backIcon, { tintColor: starTintColor ? starTintColor : colors.appWhite }]}
                    />
                </TouchableOpacity>
            </View>}
            {showTimer && <>
                <Text style={styles.TimerText}>{score}</Text>
                <View style={styles.timeContainer}>
                    <Progress.Pie progress={seconds / 60} // Set progress as a value between 0 and 1
                        size={30}
                        borderColor={colors.appDarkGreen}
                        color={colors.appWhite}
                        style={{ transform: [{ scaleX: -1 }] }} />
                </View>
            </>}
        </View>
    )
}

export default AppHeader

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: colors.appPurple
    },
    backButtonContainer: {
        width: 30,
        height: "100%",
        justifyContent: "center",
        position: "absolute",
        left: 10,
    },
    backIcon: {
        width: 20,
        height: 20,
        resizeMode: "contain",
        tintColor: colors.appWhite
    },
    titlText: {
        fontSize: 16,
        fontWeight: "500",
        color: colors.appWhite,
        textAlign: "center",
    },
    infoButtonContainer: {
        width: 30,
        height: 30,
        position: "absolute",
        left: 50,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1.5,
        borderColor: colors.appWhite
    },
    TimerText: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.appDarkGreen,
        position: "absolute",
        right: 70,
    },
    timeContainer: {
        width: 30,
        height: 30,
        position: "absolute",
        right: 10,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.appDarkGreen
    },
    rightRowContainer: {
        width: "auto",
        flexDirection: "row",
        position: "absolute",
        right: 0
    },
    rightImageButton: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center"
    }
})