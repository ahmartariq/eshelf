import React from 'react';
import { Text, View } from 'react-native';
import Theme from "../Theme";


export const SmallLabel = (props) => {
    const colors = Theme.colors
    const size = Theme.size
    
    return(
            <View>
                <Text style={{ marginLeft:4, fontSize:10, fontFamily:size.text, color:'#F8EFEB', opacity:0.25  , position:'absolute' }}>{props.LabelHeading}</Text> 
            </View>
    )
};


