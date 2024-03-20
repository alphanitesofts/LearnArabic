import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    FlatList,
    TouchableOpacity,
    Dimensions,
    Image
} from 'react-native';
import colors from '../../utils/colors';
import Icons from '../../assets/icons';
import Sound from 'react-native-sound';

const MatchingButtons = ({
    data,
}) => {

    const [list, setList] = useState([[]])
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        data && setList(data)
    }, [data])

    const playSound = (soundObject) => {
        setIsPlaying(true)
        if (soundObject) {
            soundObject.play((success) => {
                if (success) {
                    console.log('Sound played successfully');
                    setIsPlaying(false)
                } else {
                    console.log('Error playing sound');
                    setIsPlaying(false)
                }
            });
        }
    };

    const renderItem = ({ item }) => {

        let soundObject = ""

        if (item?.sound) {
            soundObject = new Sound(`${item?.sound}`, Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    console.log('Error loading sound', error);
                } else return
            });
        }

        return (
            <TouchableOpacity style={styles.renderContainer} disabled={item?.type === "audio"}>
                {item?.type === "image" && <Image
                    source={Icons.donkeyIcon}
                    style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: "contain"
                    }}
                />}
                {item?.type === "text" && <Text style={styles.titleText}>{item.title}</Text>}
                {item?.type === "audio" && <TouchableOpacity disabled={isPlaying} style={styles.speakerButton}
                    onPress={() => {
                        if (isPlaying) return
                        else playSound(soundObject)
                    }}
                >
                    <Image
                        source={Icons.speakerIcon}
                        style={{
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                        }}
                    />
                </TouchableOpacity>}
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            data={list}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={3}
            contentContainerStyle={{ width: "100%" }}
        />
    )
}

export default MatchingButtons

const styles = StyleSheet.create({
    renderContainer: {
        width: (Dimensions.get("window").width) / 3.2,
        height: 100,
        backgroundColor: colors.whiteGray,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.appBorder,
        marginHorizontal: 3,
        marginBottom: 3,
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    titleText: {
        color: colors.appBlack,
        fontSize: 40,
        textAlign: 'right', // Adjust the text alignment as needed
        writingDirection: 'rtl', // Set the writing direction to right-to-left
        fontFamily: 'Arial'
    },
    speakerButton: {
        width: 40,
        height: 40,
        backgroundColor: colors.appBorder,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        borderWidth: 0.2,
        borderColor: colors.appBlack,
        position: "absolute",
        left: 40,
        zIndex: 1
    }
})