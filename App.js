import React from 'react';
import { LogBox, View, Text, Image, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux';
import Routes from './src/navigation/Routes';
import colors from './src/utils/colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {

  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ]);
  LogBox.ignoreLogs([
    "ViewPropTypes will be removed from React Native",
    "ViewPropTypes will be removed from React Native, along with all other PropTypes. We recommend that you migrate away from PropTypes and switch to a type system like TypeScript. If you need to continue using ViewPropTypes, migrate to the 'deprecated-react-native-prop-types' package."
  ]);
  LogBox.ignoreAllLogs();


  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.appPurple} />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Routes />
      </GestureHandlerRootView>
    </Provider>
  )
}

export default App
