import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Account, {ChangeEmail, ChangePassword} from '../screens/Account';

const Stack = createNativeStackNavigator();

export default function AccountNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Accout" component={Account} />
        <Stack.Screen name="ChangeEmail" component={ChangeEmail} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
