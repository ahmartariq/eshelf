import {Component, useState} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import Theme from '../Theme';
import {SettingLink} from '../components/SettingLink';
import {Field, Password} from '../components/Inputs';
import {Button} from '../components/Button';
import { SmallLabel } from '../components/SmallLabel';

const colors = Theme.colors;
const size = Theme.size;
const title1 = Theme.title1;
const text = Theme.text;

const Address = () => {

  const [name, setName] = useState('');

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

        <SmallLabel LabelHeading={"Name"} /><Field placeholder={"NAME"} marginBottom={12} />

        <SmallLabel LabelHeading={"LAST NAME"} /><Field placeholder={"LAST NAME"} marginBottom={12} />

        <SmallLabel LabelHeading={"COUNTRY"} /><Field placeholder={"COUNTRY"} marginBottom={12} />

        <SmallLabel LabelHeading={"CITY"} /><Field placeholder={"CITY"} marginBottom={12} />

        <SmallLabel LabelHeading={"ADDRESS"} /><Field placeholder={"ADDRESS"} marginBottom={12} />

        <SmallLabel LabelHeading={"POST CODE"} /><Field placeholder={"POST CODE"} marginBottom={12} />

        <SmallLabel LabelHeading={"PHONE NUMBER"} /><Field placeholder={"PHONE NUMBER"} marginBottom={40} />


        <Text style={{fontFamily: 'GT-America-Light', fontSize:10.69, color:colors.gray, lineHeight:15, marginBottom:40}}>AT ESHELFT WE TAKE YOUR PRIVACY VERY SERIOUSLY AND AER COMMITED TO THE PROTECTION OF YOUR PERSONAL DATA. LEARN MORE ABOUT HOW WE CARE AND USE YOUR DATA IN OUR <Text style={{textDecorationLine:'underline'}}>PRIVACY POLICY</Text> </Text>
        
        <Button text={"SAVE ADDRESS"} height={53} />

      </ScrollView>
    );
  
}

export default Address;
