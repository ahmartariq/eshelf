import { useState, useCallback } from 'react';
import { Text, View, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import Theme from '../Theme';
import { Button } from '../components/Button';
import { Field, Password } from '../components/Inputs';


const colors = Theme.colors
const size = Theme.size
const title1 = Theme.title1
const text = Theme.text

const SignUp = () => {

    // SignUp Handle    
    const handleSignUp = () => {
        console.log(name);
        console.log(email);
        console.log(retypeEmail);
        console.log(password);
        console.log(retypePassword);
    }
   
    // States 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [retypeEmail, setRetypeEmail] = useState("");
    const [password, setAPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");


    return (
        // <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"} style={{flex:1}}>
        <View style={{ backgroundColor: colors.background, paddingTop: '10%', paddingHorizontal: 35, flex: 1 }}>
            <Text style={title1}>Create an account</Text>
            <Text style={{ fontSize: text.fontSize, color: text.color, marginTop: 14, fontFamily: text.fontFamily }}>Provice your information below to create a
                new account.</Text>

            <Field marginTop={'15%'} placeholder={"NAME"} keyboardType={"text"} onChangeText={setName} value={name} />
            <Field marginTop={'10%'} placeholder={"EMAIL"} keyboardType={"email-address"} autoComplete={"email"} onChangeText={setEmail} value={email} />
            <Field marginTop={'10%'} placeholder={"RETYPE EMAIL"} keyboardType={"email-address"} autoComplete={"email"} onChangeText={setRetypeEmail} value={retypeEmail} />
            <Password marginTop={"10%"} placeholder={"PASSWORD "} onChangeText={setAPassword} value={password} />
            <Password marginTop={"10%"} placeholder={"RETYPE PASSWORD"} onChangeText={setRetypePassword} value={retypePassword} />

            <View style={{marginTop: '20%' , justifyContent: 'center' }}>

            <View style={{ flexDirection: 'row' , justifyContent: 'center'}}>
                <Text style={{ color: colors.text }}>Don't have an account? </Text>
                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={{ color: colors.tertiary, textDecorationLine: 'underline' }}>Register</Text>
                </TouchableOpacity>
            </View>
            <Button height={54} marginTop={"3%"} text={"SignUp"} onPress={handleSignUp} />
            </View>
        </View>
        // </KeyboardAvoidingView>
    )
}


export default SignUp