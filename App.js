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
import Admin, {
  Dashboard,
  UsersProducts,
  Users,
  EditProduct,
  AddProduct,
} from './screens/Admin';
import Tabs from './navigation/Tabs';
import ProductList from './screens/ProductList';

const Stack = createNativeStackNavigator();

//

const App = () => {
  return <AddProduct />;
  //<Tabs />;
};

export default App;
