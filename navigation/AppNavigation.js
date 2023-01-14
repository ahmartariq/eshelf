import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import ForgotPassword, { OTP, ResetPassword } from '../screens/ForgotPassowrd';
import Splash from '../screens/Splash';
import GetStarted from '../screens/GetStarted';
import Tabs from './Tabs';
import Account, { ChangeEmail, ChangePassword } from '../screens/Account';
import Profile from '../screens/Profile';
import Address, { EditAddress } from '../screens/Address';
import Payment, { PaymentMethodInfo } from '../screens/Payment';



const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />


        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="ChangeEmail" component={ChangeEmail} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />


        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="EditAddress" component={EditAddress} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="PaymentMethodInfo" component={PaymentMethodInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation