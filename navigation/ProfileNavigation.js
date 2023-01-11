import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Address from '../screens/Address';
import Profile from '../screens/Profile';
import Account from '../screens/Account';
import Payment from '../screens/Payment';

const Stack = createNativeStackNavigator();

export default function ProfileNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="Payment" component={Payment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
