import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Theme from "../Theme";
import { SettingLink } from './SettingLink';
export default function UsersField({Name, Email, PhoneNumber}) {

    const colors = Theme.colors
    const size = Theme.size
  return (
    <View style = {{backgroundColor: '#EEEEEE', margin: 20, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between'}} >
        <View >
            <Text
                style={{
                fontSize: size.headline,
                color: colors.primary,
                fontWeight: 'bold',
                marginTop: 20,
                paddingLeft: '5%',
                }}>
                {Name}
            </Text>
            <Text style={{color:colors.primary, paddingLeft: '5%'}}>{Email}</Text>
            <Text style={{color:colors.primary, marginBottom:20, paddingLeft: '5%'}}>{PhoneNumber}</Text>
        </View>
        <View >
        </View>
    </View>
  )
}

const styles = StyleSheet.create({})