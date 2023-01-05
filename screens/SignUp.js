import { useState, useCallback } from 'react';
import { Text, TextInput, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Theme from '../Theme';
import { Button } from '../components/Button';
import { Field, Password } from '../components/Inputs';



const Facebook = '../assets/pics/facebook.png'
const Instagram = '../assets/pics/instagram.png'
const Twitter = '../assets/pics/twitter.png'


const handleSignUp = () => {

}

const SignUp = () => {

    const colors = Theme.colors
    const size = Theme.size
    const title1 = Theme.title1
    const text = Theme.text
    return (
        <View style={{ backgroundColor: colors.background, paddingTop: '10%', paddingHorizontal: 35, flex: 1 }}>
            <Text style={title1}>Create an account</Text>
            <Text style={{ fontSize: text.fontSize, color: text.color, marginTop: 14, fontFamily: text.fontFamily }}>Provice your information below to create a
                new account.</Text>

            <Field marginTop={'15%'} placeholder={"NAME"} keyboardType={"text"} />
            <Field marginTop={'10%'} placeholder={"EMAIL"} keyboardType={"email-address"} autoComplete={"email"} />
            <Field marginTop={'10%'} placeholder={"RETYPE EMAIL"} keyboardType={"email-address"} autoComplete={"email"} />
            <Password marginTop={"10%"} placeholder={"PASSWORD "} />
            <Password marginTop={"10%"} placeholder={"RETYPE PASSWORD"} />

            <View style={{marginTop: '20%' , justifyContent: 'center' }}>

            <View style={{ flexDirection: 'row' , justifyContent: 'center'}}>
                <Text style={{ color: colors.text }}>Don't have an account? </Text>
                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={{ color: colors.tertiary, textDecorationLine: 'underline' }}>Register</Text>
                </TouchableOpacity>
            </View>
            <Button height={54} marginTop={"3%"} text={"Login"} onPress={handleSignUp} />
            </View>
        </View>
    )
}


export default SignUp