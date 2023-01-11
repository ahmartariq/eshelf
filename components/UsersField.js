import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Theme from "../Theme";
import { SettingLink } from './SettingLink';
import {SvgXml} from 'react-native-svg';
export default function UsersField({Name, Email, PhoneNumber}) {

    const deleteSVG = `<svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 5.25865V19.2137C15 19.7425 14.7893 20.2495 14.4142 20.6234C14.0391 20.9973 13.5304 21.2073 13 21.2073H3C2.46957 21.2073 1.96086 20.9973 1.58579 20.6234C1.21071 20.2495 1 19.7425 1 19.2137V5.25865M4 5.25865V3.26507C4 2.73634 4.21071 2.22926 4.58579 1.85539C4.96086 1.48152 5.46957 1.27148 6 1.27148H10C10.5304 1.27148 11.0391 1.48152 11.4142 1.85539C11.7893 2.22926 12 2.73634 12 3.26507V5.25865" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `

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
            <SvgXml xml = {deleteSVG}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({})