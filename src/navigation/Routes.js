import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Splash from "../screens/Splash";
import Landing from "../screens/Landing";
import LevelTest from "../screens/LevelTest";
import Introduction from "../screens/Introduction";
import AboutUs from "../screens/AboutUs";
import OrderBook from "../screens/OrderBook";
import LearnVowels from "../screens/LearnVowels";
import UnlockLevels from "../screens/UnlockLevels";
import LearnByLevels from "../screens/LearnByLevels";
import LevelsScreen from "../screens/LevelsScreen";
import Learn from "../screens/Learn";
import ReadAndLearn from "../screens/ReadAndLearn";
import MatchTheWord from "../screens/MatchTheWord";
import MatchWordFinish from "../screens/MatchWordFinish";
import WordPuzzle from "../screens/WordPuzzle";
import ListenAndPick from "../screens/ListenAndPick";
import ListenAndSort from "../screens/ListenAndSort";
import MixAndMatch from "../screens/MixAndMatch";
import MatchingLetter from "../screens/MatchingLetter";
import MissingWord from "../screens/MissingWord";
import Translate from "../screens/Translate";
import RightSentence from "../screens/RightSentence";

const Stack = createNativeStackNavigator()

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }} >
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Landing" component={Landing} />
                <Stack.Screen name="Introduction" component={Introduction} />
                <Stack.Screen name="AboutUs" component={AboutUs} />
                <Stack.Screen name="OrderBook" component={OrderBook} />
                <Stack.Screen name="LearnVowels" component={LearnVowels} />
                <Stack.Screen name="LevelTest" component={LevelTest} />
                <Stack.Screen name="UnlockLevels" component={UnlockLevels} />
                <Stack.Screen name="LearnByLevels" component={LearnByLevels} />
                <Stack.Screen name="LevelsScreen" component={LevelsScreen} />
                <Stack.Screen name="Learn" component={Learn} />
                <Stack.Screen name="ReadAndLearn" component={ReadAndLearn} />
                <Stack.Screen name="MatchTheWord" component={MatchTheWord} />
                <Stack.Screen name="MatchWordFinish" component={MatchWordFinish} />
                <Stack.Screen name="WordPuzzle" component={WordPuzzle} />
                <Stack.Screen name="ListenAndPick" component={ListenAndPick} />
                <Stack.Screen name="ListenAndSort" component={ListenAndSort} />
                <Stack.Screen name="MixAndMatch" component={MixAndMatch} />
                <Stack.Screen name="MatchingLetter" component={MatchingLetter} />
                <Stack.Screen name="MissingWord" component={MissingWord} />
                <Stack.Screen name="Translate" component={Translate} />
                <Stack.Screen name="RightSentence" component={RightSentence} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;