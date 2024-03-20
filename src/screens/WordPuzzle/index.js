import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  ImageBackground
} from 'react-native';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import Icons from '../../assets/icons';
import { useIsFocused } from '@react-navigation/native';
import Images from '../../assets/images';
import translations from '../../translations';
import RoundButton from '../../components/RoundButton';
import colors from '../../utils/colors';
import SlideView from '../../components/SlideView';

const arrayOfArrays = [
  [
    { word: "dada" },
    { id: "1", arabic: translations.dal.arabic },
    { id: "2", arabic: translations.aleph.arabic },
    { id: "3", arabic: translations.dal.arabic },
    { id: "4", arabic: translations.aleph.arabic },
  ],
  [
    { word: "dadu" },
    { id: "1", arabic: translations.dal.arabic },
    { id: "2", arabic: translations.aleph.arabic },
    { id: "3", arabic: translations.dal.arabic },
    { id: "4", arabic: translations.waw.arabic },
  ],
  [
    { word: "dudu" },
    { id: "1", arabic: translations.dal.arabic },
    { id: "2", arabic: translations.waw.arabic },
    { id: "3", arabic: translations.dal.arabic },
    { id: "4", arabic: translations.waw.arabic },
  ],
  [
    { word: "duda" },
    { id: "1", arabic: translations.dal.arabic },
    { id: "2", arabic: translations.waw.arabic },
    { id: "3", arabic: translations.dal.arabic },
    { id: "4", arabic: translations.aleph.arabic },
  ],

]

const WordPuzzle = ({ navigation, route }) => {

  const { data, level } = route?.params
  const isFocused = useIsFocused()

  const [showInfo, setShowInfo] = useState(false)
  const [selectedAlphabet, setSelectedAlphabet] = useState([])
  const [selectedWord, setSelectedWord] = useState('');
  const [randomArray, setRandomArray] = useState([])

  useEffect(() => {
    if (isFocused) {
      const randomIndex = Math.floor(Math.random() * arrayOfArrays.length - 1)
      randomIndex === -1 ? setRandomArray(arrayOfArrays[0]) : setRandomArray(arrayOfArrays[randomIndex])
    }
  }, [isFocused])

  useEffect(() => {
    const word = selectedAlphabet.map(item => item.arabic).join('');
    setSelectedWord(word);
    setTimeout(() => {
      if (selectedAlphabet?.length >= 4) {
        setRandomArray([])
        changeData()
      }
    }, 1000)
  }, [selectedAlphabet])

  const changeData = () => {
    const randomIndex = Math.floor(Math.random() * arrayOfArrays.length - 1)
    randomIndex === -1 ? setRandomArray(arrayOfArrays[0]) : setRandomArray(arrayOfArrays[randomIndex])
    setSelectedAlphabet([])
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.renderContainer}>
        <RoundButton
          title={item.arabic}
          disabled={selectedAlphabet.includes(item)}
          mainStyle={{
            backgroundColor: selectedAlphabet?.includes(item) ? colors.ApplightGray : colors.appButtonBg
          }}
          onPress={() => setSelectedAlphabet(selectedAlphabet.concat(item))}
        />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <SlideView
        visible={showInfo}
        mainStyle={{ alignSelf: "center" }} />
      <ImageBackground source={Images.backGroundImage} style={{ width: "100%", height: 250, marginTop: "auto", position: "absolute", bottom: 0, }}>
      </ImageBackground>
      <AppHeader
        title={"Word Puzzle"}
        showBackButton={true}
        backIconSource={Icons.backIcon}
        navigation={navigation}
        onInfoPress={() => setShowInfo(true)}
        showTimer={true}
        isFocused={isFocused}
        onTimerFinished={() => navigation.navigate("MatchWordFinish", { data: data, level: level })}
      />
      <View style={styles.innerContainer}>
        <View style={{
          width: "100%",
          padding: 10
        }}>
          <TouchableOpacity style={styles.speakerButtonContainer}
            onPress={() => { }}
          >
            <Image
              source={Icons.speakerIcon}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
          <Image
            source={Images.cloudBackground}
            style={styles.cloudImage}
          />
          <Image
            source={Icons.pinkLampIcon}
            style={styles.pinkLampIconStyle}
          />
          <View style={styles.selectedTextContainer}>
            <Text style={styles.selectedTextStyle}>{selectedWord}</Text>
          </View>
          {randomArray && randomArray?.length > 0 && <Text style={styles.wordText}>{`${randomArray[0]?.word}`}</Text>}
          <FlatList
            data={randomArray?.slice(1)}
            renderItem={renderItem}
            numColumns={4}
            keyExtractor={item => item.id}
            contentContainerStyle={{ width: "100%" }}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default WordPuzzle;