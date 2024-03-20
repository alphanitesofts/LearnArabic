import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import colors from '../../utils/colors';
import {
    ScaleDecorator,
    NestableScrollContainer, NestableDraggableFlatList
} from "react-native-draggable-flatlist";
import fonts from '../../utils/fonts';
import SpeakerButton from '../../components/SpeakerButton';
import Sound from 'react-native-sound';

const DraggableFlatList = ({
    mainStyle,
    data,
    heading
}) => {

    const [options, setOptions] = useState([])
    const [compareableAnswer, setComparableAnswer] = useState([])
    const [isPlaying, setIsPlaying] = useState(false)
    const [soundFile, setSoundFile] = useState(null);

    useEffect(() => {
        data && puzzleData(data)
    }, [data])

    useEffect(() => {
        // Load the sound file when the component mounts
        const soundObject = new Sound('level_1_1_doo.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('Error loading sound', error);
            } else {
                setIsPlaying(false)
                setSoundFile(soundObject);
            }
        });

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
                    setIsPlaying(false)
                } else {
                    console.log('Error playing sound');
                }
            });
        }
    };

    const puzzleData = (orignalData) => {
        if (orignalData) {
            const splitData = orignalData?.split(" ")
            setComparableAnswer(splitData)
            const indexesArray = Array.from({ length: splitData.length }, (_, index) => index);
            const shuffledIndexes = indexesArray.sort(() => Math.random() - 0.5);
            const randomArray = shuffledIndexes?.map((index) => splitData[index])
            setOptions(randomArray)
        }
    }

    const renderItem = ({ item, drag, isActive }) => {
        const itemIndex = compareableAnswer.indexOf(item);

        return (
            <ScaleDecorator>
                <TouchableOpacity style={[styles.renderContainer, {
                    borderColor: isActive ? colors.appPurple : colors.appBorder,
                    backgroundColor: itemIndex !== -1 && itemIndex === options?.indexOf(item) ? colors.appGreen : colors.warningRed
                }]}
                    onLongPress={drag}
                >
                    <Text style={styles.labelText}>{item}</Text>
                </TouchableOpacity>
            </ScaleDecorator>
        )
    }

    return (
        <View style={[styles.mainContainer, mainStyle]}>
            <View style={styles.topRowContainer}>
                <View style={styles.leftTopContainer}>
                    <Text style={styles.headingText}>{heading}</Text>
                </View>
                <SpeakerButton
                    needPink={true}
                    mainStyle={{ borderWidth: 2 }}
                    onPress={() => {
                        if (isPlaying) return
                        else playSound()
                    }}
                />
            </View>
            {options && options?.length > 0 && <NestableScrollContainer >
                <NestableDraggableFlatList
                    data={options}
                    horizontal
                    renderItem={renderItem}
                    keyExtractor={item => item}
                    onDragEnd={({ data }) => setOptions(data)}
                    containerStyle={{
                        width: "100%",
                        marginTop: 40
                    }}
                ></NestableDraggableFlatList>
            </NestableScrollContainer>}
        </View>
    )
}

export default DraggableFlatList

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        alignItems: "center"
    },
    topRowContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    leftTopContainer: {
        width: "70%",
    },
    headingText: {
        fontSize: 28,
        fontFamily: fonts.NotoNaskhArabicBold,
        color: colors.appBlack,
    },
    renderContainer: {
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 2,
        marginRight: 5
    },
    labelText: {
        color: colors.appBlack,
        fontFamily: fonts.NotoNaskhArabicRegular
    }
})