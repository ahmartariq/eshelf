import React from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';
import Login from './screens/Login'
import SignUp from './screens/SignUp';
import Account, {ChangeEmail, ChangePassword} from './screens/Account';
import Address, {EditAddress} from './screens/Address';
import Payment, {PaymentMethodInfo} from './screens/Payment';
import ForgotPassword , {OTP, ResetPassword} from './screens/ForgotPassowrd';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/Tabs';

const App = () => {
  return (
    // <ChangePassword />
    // <ChangeEmail />
    // <Account />
    // <Address />
    // <EditAddress />
    // <Payment />
    // <PaymentMethodInfo />
    // <ForgotPassword />
    // <OTP />
    // <ResetPassword />
    <Login />

    // <NavigationContainer>
    //   <Tabs />
    // </NavigationContainer>

  );
};


export default App;
