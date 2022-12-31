import {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import Theme from '../Theme';
import {SettingLink} from '../components/SettingLink';
import {Field, Password} from '../components/Inputs';
import {Button} from '../components/Button';

const colors = Theme.colors;
const size = Theme.size;
const title1 = Theme.title1;
const text = Theme.text;

const Address = () => {
  return (
    <View
      style={{
        backgroundColor: colors.background,
        paddingTop: '10%',
        paddingHorizontal: 35,
        flex: 1,
      }}>
      <Image
        style={{marginTop: 9, width: 18, height: 18}}
        source={require('../assets/pics/backarrow.png')}></Image>
      <Text
        style={{
          marginBottom: 80,
          marginTop: 21,
          fontSize: 28,
          color: '#F8EFEB',
          fontFamily: 'GT-America-Medium',
        }}>
        Address
      </Text>
      <Text
        style={{
          fontSize: size.headline,
          color: colors.gray,
          fontWeight: 'bold',
          marginBottom: 22,
        }}>
        MUHAMMAD SHAHZAIB K
      </Text>
      <SettingLink textHeading={'PAKISTAN'} />
    </View>
  );
};



export const EditAddress = () => {

    return (
      <ScrollView
        style={{
          backgroundColor: colors.background,
          paddingTop: '10%',
          paddingHorizontal: 35,
          flex: 1,
        }}>
        <Image style={{marginTop: 9, width: 18, height: 18}} source={require('../assets/pics/backarrow.png')}></Image>
        <Text style={{marginBottom: 29, marginTop: 21, fontSize: 28, color: '#F8EFEB', fontFamily: 'GT-America-Medium'}}>EDIT ADDRESS</Text>
        <Field placeholder={"NAME"} marginBottom={12} />
        <Field placeholder={"LAST NAME"} marginBottom={12} />
        <Field placeholder={"COUNTRY"} marginBottom={12} />
        <Field placeholder={"CITY"} marginBottom={12} />
        <Field placeholder={"ADDRESS"} marginBottom={12} />
        <Field placeholder={"POST CODE"} marginBottom={12} />
        <Field placeholder={"PHONE NUMBER"} marginBottom={40} />


        <Text style={{fontFamily: 'GT-America-Light', fontSize:10.69, color:colors.gray, lineHeight:15, marginBottom:40}}>AT ESHELFT WE TAKE YOUR PRIVACY VERY SERIOUSLY AND AER COMMITED TO THE PROTECTION OF YOUR PERSONAL DATA. LEARN MORE ABOUT HOW WE CARE AND USE YOUR DATA IN OUR <Text style={{textDecorationLine:'underline'}}>PRIVACY POLICY</Text> </Text>
        
        <Button text={"SAVE ADDRESS"} height={53} />

      </ScrollView>
    );
  
}

export default Address;
