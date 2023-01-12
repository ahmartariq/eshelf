import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Tabs from './navigation/Tabs';

const Stack = createNativeStackNavigator();

//

const App = () => {
  return <Tabs />;
};

export default App;
