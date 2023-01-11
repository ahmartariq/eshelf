import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Account, {ChangeEmail, ChangePassword} from './screens/Account';
import Address, {EditAddress} from './screens/Address';
import Payment, {PaymentMethodInfo} from './screens/Payment';
import ForgotPassword, {OTP, ResetPassword} from './screens/ForgotPassowrd';
import Home from './screens/Home';
import Menu from './screens/Menu';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Tabs from './navigation/Tabs';
import ProductList from './screens/ProductList';
import Profile from './screens/Profile';
import Product from './screens/Product';
import Splash from './screens/Splash';
import GetStarted from './screens/GetStarted';

const Stack = createNativeStackNavigator();

//

const App = () => {
  return (
    // <ChangePassword />
    // <ChangeEmail />
    // <Account />
    // <Address />
    // <EditAddress />
    // <Splash />
    // <GetStarted />
    // <Payment />
    // <PaymentMethodInfo />
    // <ForgotPassword />
    // <OTP />
    // <ResetPassword />
    // <Login />
    // <SignUp />
    // <ProductList />
    // <Product />
    // <NavigationContainer>
    //   <Tabs />
    // </NavigationContainer>

    // <Profile />

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Forgot Password" component={ForgotPassword} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />

        <Stack.Screen name="Home" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
