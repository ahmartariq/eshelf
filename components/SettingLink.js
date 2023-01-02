import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Theme from "../Theme";


export const SettingLink = (props) => {
    const colors = Theme.colors
    const size = Theme.size
    
    return(
        <TouchableOpacity style={{ marginBottom:34, marginTop:props.marginTop, width:props.width}} activeOpacity={0.7} onPress={props.onPress}>
            <View style={{flexDirection:'row', justifyContent:'space-between' }}>    
                <Text style={{color: colors.gray, fontSize:size.body,  }}>{props.textHeading}</Text> 
                <Image style={{marginTop:5}} source={  require("../assets/pics/forwardarrow.png") }></Image>
            </View>
        </TouchableOpacity>
    )
};


