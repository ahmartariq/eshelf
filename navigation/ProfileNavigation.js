import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Address, {EditAddress} from '../screens/Address';
import Profile from '../screens/Profile';
import Account, {ChangeEmail, ChangePassword} from '../screens/Account';
import Payment, {PaymentMethodInfo} from '../screens/Payment';
import AccountNavigation from './AccountNavigation';

const Stack = createNativeStackNavigator();

export default function ProfileNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Profile" component={Profile} />

        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="ChangeEmail" component={ChangeEmail} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />

        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="EditAddress" component={EditAddress} />

        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="PaymentMethodInfo" component={PaymentMethodInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
