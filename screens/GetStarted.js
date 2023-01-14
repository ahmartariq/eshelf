import React, { useState, useEffect } from 'react'
import { Text, View, Image} from 'react-native'
import Theme from '../Theme'
import { SvgXml } from 'react-native-svg';
import { Button } from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const colors = Theme.colors;
const size = Theme.size;
const title1 = Theme.title1;
const text = Theme.text;

const GetStarted = ({navigation}) => {

    const getStartedIcon = `<svg width="500" height="570" viewBox="0 0 427 623" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g style="mix-blend-mode:hard-light" filter="url(#filter0_f_479_34)">
    <circle cx="321" cy="302" r="276" fill="#FF922D" fill-opacity="0.04"/>
    </g>
    <g style="mix-blend-mode:hard-light" filter="url(#filter1_f_479_34)">
    <circle cx="321" cy="302" r="223.771" stroke="#D79E84" stroke-width="12.4583"/>
    </g>
    <g style="mix-blend-mode:hard-light" filter="url(#filter2_f_479_34)">
    <circle cx="321" cy="302" r="221.854" stroke="#D79E84" stroke-width="16.2917"/>
    </g>
    <g style="mix-blend-mode:hard-light" filter="url(#filter3_ddi_479_34)">
    <circle cx="321" cy="302" r="223.771" stroke="#D79E84" stroke-opacity="0.61" stroke-width="12.4583"/>
    </g>
    <g filter="url(#filter4_f_479_34)">
    <circle cx="321" cy="302" r="226.167" stroke="#D79E84" stroke-width="7.66667"/>
    </g>
    <g filter="url(#filter5_f_479_34)">
    <circle cx="321" cy="302" r="228.083" stroke="white" stroke-width="2.5"/>
    </g>
    <defs>
    <filter id="filter0_f_479_34" x="0.4375" y="-18.5625" width="641.125" height="641.125" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="22.2812" result="effect1_foregroundBlur_479_34"/>
    </filter>
    <filter id="filter1_f_479_34" x="46.4375" y="27.4375" width="549.125" height="549.125" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="22.2812" result="effect1_foregroundBlur_479_34"/>
    </filter>
    <filter id="filter2_f_479_34" x="76.1458" y="57.1458" width="489.708" height="489.708" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="7.42708" result="effect1_foregroundBlur_479_34"/>
    </filter>
    <filter id="filter3_ddi_479_34" x="71.6896" y="67.5437" width="498.621" height="498.621" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="12.4583"/>
    <feGaussianBlur stdDeviation="4.79167"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.224 0 0 0 0 0.15 0 0 0 0 0 0 0 0 0.7 0"/>
    <feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow_479_34"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="14.8542"/>
    <feGaussianBlur stdDeviation="9.65521"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.845833 0 0 0 0 0.67496 0 0 0 0 0.597017 0 0 0 0.31 0"/>
    <feBlend mode="color-dodge" in2="effect1_dropShadow_479_34" result="effect2_dropShadow_479_34"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_479_34" result="shape"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dx="-1.24583" dy="2.49167"/>
    <feGaussianBlur stdDeviation="0.622917"/>
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
    <feBlend mode="normal" in2="shape" result="effect3_innerShadow_479_34"/>
    </filter>
    <filter id="filter4_f_479_34" x="89.0833" y="70.0833" width="463.833" height="463.833" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="0.958333" result="effect1_foregroundBlur_479_34"/>
    </filter>
    <filter id="filter5_f_479_34" x="89.7222" y="70.7222" width="462.556" height="462.556" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="0.638889" result="effect1_foregroundBlur_479_34"/>
    </filter>
    </defs>
    </svg>
    `



  return (
    <View style={{backgroundColor:colors.background, flex: 1}}>
      <SvgXml xml={getStartedIcon} width="100%" height="70%"  /> 
      <View style={{position:"absolute"}}>
        <Image source={require("../assets/pics/startedman.png")} style={{}}   />
      </View>
      <View style={{marginHorizontal: 25 , flex: 1}}>
        <Text style={{ width:"60%", fontFamily:"GT-America-Medium", color:colors.heading, fontSize:33, marginBottom:"2%"}}>Start Journey With 
          <Text style={{fontFamily: 'Bilagike', fontSize : 47, color : colors.primary}}> 
          ESHELF
        </Text> 
        </Text>
        <Text style={{width:"60%", fontFamily: "GT-America-Medium", color:colors.heading, marginBottom:"4%"}}>Smart, Gorgous & faionable Collection</Text>
        <Button height={"25%"} text={"Get Started"} onPress={() => navigation.navigate('Login')}  />
      </View>

    </View>
  )
}

export default GetStarted;