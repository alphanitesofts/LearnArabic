import React, { useEffect, useState } from 'react';
import {
    Image,
    ImageBackground,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import colors from '../utils/colors';
import Icons from '../assets/icons';
import Images from '../assets/images';

const SlideView = ({
    visible,
    mainStyle
}) => {

    const [isVisible, setIsVisible] = useState(visible)
    const [animating, setAnimating] = useState(false)

    useEffect(() => {
        if (visible) {
            setIsVisible(visible)
            setAnimating(true)
        }
    }, [visible])

    const handleAnimationEnd = () => {
        setAnimating(false)
        setTimeout(() => {
            setIsVisible(!isVisible);
        }, 1000)
    };

    return (
        <>
            {isVisible ? <Animatable.View
                animation={animating ? "fadeInDownBig" : "fadeOutUp"}
                duration={700}
                delay={500}
                style={[styles.mainContainer, mainStyle]} >
                <ImageBackground
                    source={Images.aladinJinBackgroundImage}
                    style={{
                        width: "100%",
                        height: "90%"
                    }}
                >
                    <View style={styles.infoContainer}>
                        <ScrollView style={{ width: "100%", height: "100%" }}>
                            <Text style={styles.infoText}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Text>
                        </ScrollView>
                        <TouchableOpacity style={styles.upArrowButton} onPress={() => handleAnimationEnd()}>
                            <Image
                                source={Icons.upArrowIcon}
                                style={{ width: 20, height: 20, resizeMode: "contain", tintColor: colors.appBlack }}
                            />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </Animatable.View > : null}
        </>
    )
}

export default SlideView

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.appWhite,
        position: "absolute",
        zIndex: 1,
        top: Platform.OS === "android" ? 70 : Dimensions.get('window').height/7.3,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        width: "70%",
        height: 250,
        padding: 10,
        borderRadius: 20,
        alignItems: "center",
        marginTop: "60%",
        alignSelf: "center",
    },
    infoText: {
        color: colors.appBlack,
        fontSize: 14,
        textAlign: "center"
    },
    upArrowButton: {
        width: 100,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10
    }
})