import React, { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import {
    SafeAreaView,
    View,
    Text,
    Image
} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Icons from '../../assets/icons';

const Splash = ({ navigation }) => {

    const isFocused = useIsFocused()

    useEffect(()=>{
        if(isFocused){
            setTimeout(()=>{
                navigation.navigate("Landing")
            },3000)
        }
    },[isFocused])

    return (
        <LinearGradient colors={['#65719a', '#53598b', '#32346d']} style={styles.mainContainer}>
            <SafeAreaView style={styles.mainContainer}>
                <Image
                    source={Icons.lampIcon}
                    style={styles.lampIconStyle}
                />
            </SafeAreaView>
        </LinearGradient>
    )
}

export default Splash;