import React, { useState } from 'react';
import {
  SafeAreaView,
  ImageBackground,
  View,
  Image
} from 'react-native';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import Icons from '../../assets/icons';
import LevelsProgression from '../../chunks/LevelsScreen/LevelsProgression';
import SlideView from '../../components/SlideView';
import Images from '../../assets/images';
import colors from '../../utils/colors';

const LevelsScreen = ({ navigation, route }) => {

  const { letters, completed, level } = route?.params
  const [showInfo, setShowInfo] = useState(false)

  return (
    <SafeAreaView style={styles.mainContainer}>
      <SlideView visible={showInfo} />
      <ImageBackground source={Images.backGroundImage} style={{ width: "100%", height: 250, marginTop: "auto", position: "absolute", bottom: 0, }}>
      </ImageBackground>
      <AppHeader
        title={"Levels"}
        navigation={navigation}
        showBackButton={true}
        backIconSource={Icons.backIcon}
        onInfoPress={() => setShowInfo(true)}
      />
      <View style={styles.lampRowContainer}>
        <Image
          source={Icons.lampIcon}
          style={[styles.lampIconStyle, { tintColor: completed >= 1 ? "" : colors?.appBorder }]}
        />
        <Image
          source={Icons.lampIcon}
          style={[styles.lampIconStyle, { marginHorizontal: 10, tintColor: completed >= 2 ? "" : colors?.appBorder }]}
        />
        <Image
          source={Icons.lampIcon}
          style={[styles.lampIconStyle, { tintColor: completed >= 3 ? "" : colors?.appBorder }]} />
      </View>
      <View style={styles.headingContainer}>
      </View>
      <View style={styles.innerContainer}>
        <LevelsProgression
          navigation={navigation}
          data={letters}
          level={level}
        />

      </View>
    </SafeAreaView>
  )
}

export default LevelsScreen;