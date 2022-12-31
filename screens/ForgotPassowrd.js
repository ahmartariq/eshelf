import { useState, useCallback } from 'react';
import { Text, TextInput, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Theme from '../Theme';
import { Button } from '../components/Button';
import { Field, Password } from '../components/Inputs';



const Facebook = '../assets/pics/facebook.png'
const Instagram = '../assets/pics/instagram.png'
const Twitter = '../assets/pics/twitter.png'


const handleLogin = () => {

}

const ForgotPassword = () => {

  const colors = Theme.colors
  const size = Theme.size
  const title1 = Theme.title1
  const text = Theme.text

  return (
      <View style={{   backgroundColor: colors.background , paddingTop: '10%', paddingHorizontal: 35 , flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{width: '30%' , height : 5, backgroundColor : colors.primary , borderRadius : 30 , marginRight: 8}}></View>
        <View style={{width: '30%' , height : 5, backgroundColor : colors.gray , borderRadius : 30 , marginRight: 8}}></View>
        <View style={{width: '30%' , height : 5, backgroundColor : colors.gray , borderRadius : 30}}></View>

      </View>
      
      <Image style={{alignSelf : "center" , marginBottom : 30}} source={require("../assets/pics/forgotPassword.png")}/>
        <Text style={title1}>Forget Password</Text>
        <Text style={{ fontSize: text.fontSize, color: text.color, marginTop: 14, fontFamily: text.fontFamily }}>Set a strong password that has atleast 8 characters a long </Text>

        <Field marginTop={'15%'} placeholder={"EMAIL"} keyboardType={"email-address"} autoComplete={"email"} />

        <Button height={54} marginTop={"76.5%"} text={"Continue"} onPress={handleLogin} />
      </View>
  )
}

export const OTP = () => {

  const colors = Theme.colors
  const size = Theme.size
  const title1 = Theme.title1
  const text = Theme.text
  
  return (
      <View style={{   backgroundColor: colors.background , paddingTop: '10%', paddingHorizontal: 35 , flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{width: '30%' , height : 5, backgroundColor : colors.primary , borderRadius : 30 , marginRight: 8}}></View>
        <View style={{width: '30%' , height : 5, backgroundColor : colors.primary , borderRadius : 30 , marginRight: 8}}></View>
        <View style={{width: '30%' , height : 5, backgroundColor : colors.gray , borderRadius : 30}}></View>

      </View>
      <Image style={{alignSelf : "center" , marginBottom : 30}} source={require("../assets/pics/forgotPassword.png")}/>
        <Text style={title1}>Check email for OTP</Text>
        <Text style={{ fontSize: text.fontSize, color: text.color, marginTop: 14, fontFamily: text.fontFamily }}>To reset your password, please enter the 5 digit pin sent to you email.</Text>

        <Field marginTop={'15%'} placeholder={"EMAIL"} keyboardType={"email-address"} autoComplete={"email"} />
        <TouchableOpacity activeOpacity={0.7} style={{marginTop: 40}}>
        <Text style={{alignSelf: 'center' , fontSize: text.fontSize, color: text.color, fontFamily: text.fontFamily }}>Resend Code?</Text>
        </TouchableOpacity>
        <Button height={54} marginTop={"60%"} text={"Continue"} onPress={handleLogin} />
      </View>
  )
}

export const ResetPassword = () =>{
  const colors = Theme.colors
  const size = Theme.size
  const title1 = Theme.title1
  const text = Theme.text

  return(
    <View style={{   backgroundColor: colors.background , paddingTop: '10%', paddingHorizontal: 35 , flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{width: '30%' , height : 5, backgroundColor : colors.primary , borderRadius : 30 , marginRight: 8}}></View>
        <View style={{width: '30%' , height : 5, backgroundColor : colors.primary , borderRadius : 30 , marginRight: 8}}></View>
        <View style={{width: '30%' , height : 5, backgroundColor : colors.primary , borderRadius : 30}}></View>

      </View>
      <Image style={{alignSelf : "center" , marginBottom : 30}} source={require("../assets/pics/forgotPassword.png")}/>
        <Text style={title1}>Reset Password</Text>
        <Text style={{ fontSize: text.fontSize, color: text.color, marginTop: 14, fontFamily: text.fontFamily }}>Set a strong password that has at least 8 characters long.</Text>

        <Password marginTop={"10%"} placeholder="PASSWORD " />
        <Password marginTop={"5%"} placeholder={"RETYPE PASSWORD "} />

        <Button height={54} marginTop={"60%"} text={"Reset Password"} onPress={handleLogin} />
      </View>
  )
}


export default ForgotPassword