import { useState, useCallback } from 'react';
import { Text, TextInput, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Theme from '../Theme';
import { Button } from '../components/Button';
import { Field, Password } from '../components/Inputs';



const Facebook = '../assets/pics/facebook.png'
const Instagram = '../assets/pics/instagram.png'
const Twitter = '../assets/pics/twitter.png'


const handleLogin = () => {
    console.log("pressed");

}

const Login = () => {

  const colors = Theme.colors
  const size = Theme.size
  const title1 = Theme.title1
  const text = Theme.text
  return (
      <View style={{   backgroundColor: colors.background , paddingTop: '10%', paddingHorizontal: 35 , flex: 1}}>
        <Text style={title1}>Lets sign you in</Text>
        <Text style={{ fontSize: text.fontSize, color: text.color, marginTop: 14, fontFamily: text.fontFamily }}>Welcome Back.</Text>
        <Text style={{ fontSize: text.fontSize, color: text.color, marginTop: 4, fontFamily: text.fontFamily }}>You have been missed!</Text>

        <Field marginTop={'15%'} placeholder={"EMAIL"} keyboardType={"email-address"} autoComplete={"email"} />
        <Password marginTop={"10%"} placeholder={"PASSWORD"} />

        <TouchableOpacity
          activeOpacity={0.7}
          style={{ marginTop: "5%", width: 120, alignSelf: 'flex-end' }}>
          <Text style={{ color: colors.text, fontFamily: "rg" }}>Forgot Password?</Text>
        </TouchableOpacity>
        <Button height={54} marginTop={"8%"} text={"Login"} onPress={handleLogin} />
        <View style={{ borderTopWidth: 1, borderTopColor: colors.primary, marginTop: '20%', width: '100%', alignItems: 'center' }}>
          <Text style={{ color: colors.text, fontSize: size.body, fontFamily: 'rg', paddingTop: 20 }}>OR</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: 16 }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity activeOpacity={0.7}><Image style={{ marginHorizontal: 5 }} source={require(Facebook)} /></TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}><Image style={{ marginHorizontal: 5 }} source={require(Twitter)} /></TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}><Image style={{ marginHorizontal: 5 }} source={require(Instagram)} /></TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: '45%' , marginBottom: 20, flexDirection: 'row',  justifyContent: 'center' }}>
            <Text style={{ color: colors.text }}>Don't have an account? </Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={{ color: colors.tertiary, textDecorationLine: 'underline' }}>Register</Text>
            </TouchableOpacity>
          </View>
      </View>
  )
}


export default Login