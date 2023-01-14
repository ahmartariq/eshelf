import {useEffect, useState} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Theme from '../Theme';
import {Button} from '../components/Button';
import {Field, Password} from '../components/Inputs';
import {auth, db} from '../FirebaseConfig';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {ref} from 'firebase/database';
import {set} from 'firebase/database';

import {NavigationContainer} from '@react-navigation/native';

const colors = Theme.colors;
const size = Theme.size;
const title1 = Theme.title1;
const text = Theme.text;

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reEmail, setReEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [err, setErr] = useState('');

  const handleSignUp = ({navigation}) => {
    setErr('');
    if (name === '') setErr('Name Field is empty');
    else if (email === '') setErr('Email Field is empty');
    else if (reEmail === '') setErr('Retype email Field is empty');
    else if (email != reEmail) setErr('Retype email does not match email');
    else if (password === '') setErr('Enter your password');
    else if (rePassword === '') setErr('Retype password Field is empty');
    else if (password != rePassword)
      setErr('Retype password does not match email');
    else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          writeUserData(email, name, userCredential.user.uid);
          // navigation.navigate('Login');
          setErr('');
          setName('');
          setEmail('');
          setReEmail('');
          setPassword('');
          setRePassword('');
        })
        .catch(error => {
          // if (
          //   (error =
          //     'Password should be at least 6 characters (auth/weak-password)')
          // )
          //   setErr('Password should be at least 6 characters');
          // else {
          //   setErr('Email address already in use');
          // }
          console.log(error);
        });
    }
  };

  const writeUserData = (email, name, id) => {
    set(ref(db, 'users/' + id), {
      name: name,
      email: email,
    });
    navigation.navigate('Login');
    console.log('User Created!!');
  };

  return (
    <View
      style={{
        backgroundColor: colors.background,
        paddingTop: '10%',
        paddingHorizontal: 35,
        flex: 1,
      }}>
      <Text style={title1}>Create an account</Text>
      <Text
        style={{
          fontSize: text.fontSize,
          color: text.color,
          marginTop: 14,
          fontFamily: text.fontFamily,
        }}>
        Provice your information below to create a new account.
      </Text>
      <Field
        marginTop={'15%'}
        placeholder={'NAME'}
        keyboardType={'text'}
        value={name}
        onChangeText={text => setName(text)}
      />
      <Field
        marginTop={'10%'}
        placeholder={'EMAIL'}
        keyboardType={'email-address'}
        autoComplete={'email'}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Field
        marginTop={'10%'}
        placeholder={'RETYPE EMAIL'}
        keyboardType={'email-address'}
        autoComplete={'email'}
        value={reEmail}
        onChangeText={text => setReEmail(text)}
      />
      <Password
        marginTop={'10%'}
        placeholder={'PASSWORD '}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Password
        marginTop={'10%'}
        placeholder={'RETYPE PASSWORD'}
        value={rePassword}
        onChangeText={text => setRePassword(text)}
      />
      <Text style={{marginTop: '2%', color: 'red', fontSize: size.text}}>
        {err}
      </Text>
      <View
        style={{
          marginTop: '10%',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: '5%',
          }}>
          <Text style={{color: colors.text}}>Already have an account? </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text
              style={{color: colors.tertiary, textDecorationLine: 'underline'}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <Button
          height={54}
          marginTop={'3%'}
          text={'SignUp'}
          onPress={handleSignUp}
        />
      </View>
    </View>
  );
};

export default SignUp;
