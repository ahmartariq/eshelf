import { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Theme from '../Theme';
import { Button } from '../components/Button';
import { Field, Password } from '../components/Inputs';
import { SvgXml } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../FirebaseConfig';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';
import { async } from '@firebase/util';


const colors = Theme.colors
const size = Theme.size
const title1 = Theme.title1
const text = Theme.text

const facebookSVG = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10.0609C20 4.50304 15.5242 0 10 0C4.47581 0 0 4.50304 0 10.0609C0 15.0824 3.65685 19.2446 8.4375 20V12.9692H5.89718V10.0609H8.4375V7.84422C8.4375 5.32292 9.92944 3.93022 12.2145 3.93022C13.3089 3.93022 14.4532 4.12657 14.4532 4.12657V6.60122H13.1919C11.95 6.60122 11.5625 7.37688 11.5625 8.17241V10.0609H14.3359L13.8923 12.9692H11.5625V20C16.3431 19.2446 20 15.0824 20 10.0609Z" fill="#E4BEAD"/>
</svg>`

const twitterSVG = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.9442 4.98436C17.9569 5.2031 17.9569 5.42188 17.9569 5.64062C17.9569 12.3125 13.8326 20 6.29444 20C3.97209 20 1.81473 19.1718 0 17.7344C0.329962 17.7812 0.64719 17.7969 0.989848 17.7969C2.90607 17.7969 4.67006 17 6.0787 15.6406C4.27666 15.5938 2.7665 14.1406 2.24618 12.1406C2.50001 12.1875 2.7538 12.2187 3.02032 12.2187C3.38833 12.2187 3.75638 12.1562 4.099 12.0469C2.22083 11.5781 0.812152 9.54687 0.812152 7.09374V7.03126C1.35782 7.40627 1.99239 7.64064 2.66493 7.67185C1.56087 6.76558 0.837542 5.21873 0.837542 3.46871C0.837542 2.53123 1.04055 1.67186 1.3959 0.921852C3.41369 3.98435 6.4467 5.98432 9.8477 6.2031C9.78426 5.8281 9.74617 5.43752 9.74617 5.04688C9.74617 2.2656 11.5736 0 13.8452 0C15.0254 0 16.0914 0.609373 16.8401 1.59375C17.7665 1.37501 18.6548 0.953114 19.4416 0.375003C19.137 1.5469 18.4898 2.53128 17.6396 3.15624C18.4645 3.04691 19.264 2.7656 20 2.37502C19.4417 3.37498 18.7437 4.26557 17.9442 4.98436Z" fill="#E4BEAD"/>
</svg>`

const instagramSVG = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0022 4.87225C7.16453 4.87225 4.87563 7.16166 4.87563 10C4.87563 12.8383 7.16453 15.1277 10.0022 15.1277C12.8399 15.1277 15.1288 12.8383 15.1288 10C15.1288 7.16166 12.8399 4.87225 10.0022 4.87225ZM10.0022 13.3337C8.16843 13.3337 6.66927 11.8387 6.66927 10C6.66927 8.16133 8.16397 6.6663 10.0022 6.6663C11.8405 6.6663 13.3352 8.16133 13.3352 10C13.3352 11.8387 11.836 13.3337 10.0022 13.3337ZM16.5343 4.6625C16.5343 5.32746 15.9989 5.85853 15.3385 5.85853C14.6737 5.85853 14.1428 5.32299 14.1428 4.6625C14.1428 4.00201 14.6782 3.46647 15.3385 3.46647C15.9989 3.46647 16.5343 4.00201 16.5343 4.6625ZM19.9297 5.87638C19.8539 4.27424 19.488 2.85507 18.3146 1.68582C17.1456 0.516568 15.7267 0.150619 14.1249 0.070289C12.4741 -0.0234297 7.52593 -0.0234297 5.87507 0.070289C4.27775 0.146156 2.8589 0.512105 1.68544 1.68136C0.511991 2.85061 0.150586 4.26978 0.0702733 5.87192C-0.0234244 7.52315 -0.0234244 12.4724 0.0702733 14.1236C0.146124 15.7258 0.511991 17.1449 1.68544 18.3142C2.8589 19.4834 4.27328 19.8494 5.87507 19.9297C7.52593 20.0234 12.4741 20.0234 14.1249 19.9297C15.7267 19.8538 17.1456 19.4879 18.3146 18.3142C19.4835 17.1449 19.8494 15.7258 19.9297 14.1236C20.0234 12.4724 20.0234 7.52761 19.9297 5.87638ZM17.797 15.8953C17.449 16.7701 16.7752 17.4439 15.8963 17.7965C14.58 18.3186 11.4568 18.1981 10.0022 18.1981C8.54769 18.1981 5.41997 18.3142 4.1082 17.7965C3.23369 17.4484 2.55996 16.7745 2.20747 15.8953C1.68544 14.5788 1.80591 11.4549 1.80591 10C1.80591 8.54513 1.68991 5.41671 2.20747 4.10465C2.55549 3.22995 3.22922 2.55606 4.1082 2.2035C5.42443 1.68136 8.54769 1.80185 10.0022 1.80185C11.4568 1.80185 14.5845 1.68582 15.8963 2.2035C16.7708 2.5516 17.4445 3.22548 17.797 4.10465C18.319 5.42118 18.1985 8.54513 18.1985 10C18.1985 11.4549 18.319 14.5833 17.797 15.8953Z" fill="#E4BEAD"/>
</svg>`



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('')

  const handleLogin = () => {
    setErr("")
    if (email === '')
      setErr('Email Field is empty')
    else if (password === '')
      setErr('Password Field is empty')
    else{
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          storeAsync(userCredential.user.uid)
          console.log("logged in");
          setEmail('')
          setPassword('')
          // navigation.navigate('Home',{userId:userCredential.user})
        })
        .catch(error => {
          setErr('Invalid Credentials!');
        })
    }
    }

    const storeAsync = async user => {
      try {
        await AsyncStorage.setItem('userId', user);
      } catch (e) {
        throw e;
      }
    }
    

  return (
    <View style={{ backgroundColor: colors.background, paddingTop: '10%', paddingHorizontal: 35, flex: 1 }}>
      <Text style={title1}>Lets sign you in</Text>
      <Text style={{ fontSize: text.fontSize, color: text.color, marginTop: 14, fontFamily: text.fontFamily }}>Welcome Back.</Text>
      <Text style={{ fontSize: text.fontSize, color: text.color, marginTop: 4, fontFamily: text.fontFamily }}>You have been missed!</Text>

      <Field marginTop={'15%'} placeholder={"EMAIL"} keyboardType={"email-address"} autoComplete={"email"} value={email} onChangeText={text => setEmail(text)} />
      <Password marginTop={"10%"} placeholder={"PASSWORD "} value={password} onChangeText={text => setPassword(text)} />
      <Text style={{marginTop: "2%" , color: 'red' , fontSize: size.text}}>{err}</Text>
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
          <TouchableOpacity activeOpacity={0.7}><SvgXml xml={facebookSVG} style={{ marginHorizontal: 5 }} /></TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}><SvgXml xml={twitterSVG} style={{ marginHorizontal: 5 }} /></TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}><SvgXml xml={instagramSVG} style={{ marginHorizontal: 5 }} /></TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: '45%', marginBottom: 20, flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={{ color: colors.text }}>Don't have an account? </Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={{ color: colors.tertiary, textDecorationLine: 'underline' }}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


export default Login