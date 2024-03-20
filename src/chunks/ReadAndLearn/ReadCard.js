import React, { useEffect, useState } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
} from 'react-native';
import colors from '../../utils/colors';
import Icons from '../../assets/icons';
import Sound from 'react-native-sound';

const ReadCard = ({
    data,
    arabicKeyToRender,
    engKeyToRender,
    showSelected,
    showEng
}) => {
    const [list, setList] = useState([])
    const [selected, setSelected] = useState([])
    const [isPlaying, setIsPlaying] = useState(false)
    const [hideVolumButton, setHideVolumButton] = useState([])

    useEffect(() => {
        data && setList(data)
        showSelected && setList(list?.map(e => selected.includes(e.id) ? e : null).filter(Boolean))
    }, [data, selected, showSelected])

    const loadSound = (sound) => {
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
        return () => {
            if (sound) {
                sound?.release();
            }
        };

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


    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.renderContainer}
                onPress={() => setHideVolumButton(prevSelected => (prevSelected.includes(item?.id) ? prevSelected.filter(e => e !== item?.id) : [...prevSelected, item?.id]))}
            >
                {!hideVolumButton?.includes(item?.id) && <TouchableOpacity style={styles.speakerButtonContainer} disabled={item?.sound?.length > 0 && isPlaying} onPress={() => {
                    loadSound(item?.sound)
                }}>
                    <Image
                        source={Icons.speakerIcon}
                        style={{
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                        }}
                    />
                </TouchableOpacity>}
                <TouchableOpacity style={styles.starIconButton}
                    onPress={() => setSelected(prevSelected => (prevSelected.includes(item?.id) ? prevSelected.filter(e => e !== item?.id) : [...prevSelected, item?.id]))}
                >
                    <Image
                        source={Icons.filledStar}
                        style={[styles.startIconStyle, {
                            tintColor: selected?.includes(item?.id) ? colors.appDarkGreen : colors.ApplightGray
                        }]}
                    />
                </TouchableOpacity>
                <Text style={styles.titlText}>{(showEng || hideVolumButton?.includes(item?.id)) ? item[engKeyToRender] : item[arabicKeyToRender]}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            data={list}
            keyExtractor={item => item?.id}
            renderItem={renderItem}
            ListEmptyComponent={() => {
                return (
                    <View style={styles.emptContainer}>
                        <Image
                            source={Icons.noDataFound}
                            style={{
                                width: 80,
                                height: 80,
                                resizeMode: "contain",
                            }}
                        />
                        <Text style={styles.emptyText}>{"Result not found"}</Text>
                    </View>
                )
            }}
        />
    )
}

export default ReadCard

const styles = StyleSheet.create({
    renderContainer: {
        width: "100%",
        minHeight: 200,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: "rgba(128,128,128,0.1)",
        borderColor: colors.appBorder,
        padding: 5,
        marginVertical: 5,
        justifyContent: "center",
        // shadowColor: "#171717",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.20,
        // shadowRadius: 3.84,

        // elevation: 5,
    },
    speakerButtonContainer: {
        width: 40,
        height: 40,
        backgroundColor: colors.appBorder,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        borderWidth: 0.2,
        borderColor: colors.appBlack,
        position: "absolute",
        left: 10,
        top: 8,
        zIndex: 1
    },
    starIconButton: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        zIndex: 1,
        right: 5,
        top: 5
    },
    startIconStyle: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    },
    titlText: {
        fontSize: 40,
        color: colors.appBlack,
        textAlign: "center",
        fontFamily: "Arial"
    },
    emptContainer: {
        width: "100%",
        height: 500,
        alignItems: "center",
        justifyContent: "center"
    },
    emptyText: {
        color: colors.appBlack,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20
    }
})