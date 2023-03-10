import {Component, useState} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import Theme from '../Theme';
import {SettingLink} from '../components/SettingLink';
import {Field, Password} from '../components/Inputs';
import {Button} from '../components/Button';
import {SmallLabel} from '../components/SmallLabel';

import {Picker} from '@react-native-picker/picker';

const colors = Theme.colors;
const size = Theme.size;
const title1 = Theme.title1;
const text = Theme.text;

const Address = ({navigation}) => {
  const [name, setName] = useState('');

  return (
    <View
      style={{
        backgroundColor: colors.background,
        paddingTop: '10%',
        paddingHorizontal: 35,
        flex: 1,
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.pop();
        }}>
        <Image
          style={{marginTop: 9, width: 18, height: 18}}
          source={require('../assets/pics/backarrow.png')}
        />
      </TouchableOpacity>
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
      <SettingLink
        textHeading={'PAKISTAN'}
        onPress={() => {
          navigation.navigate('EditAddress');
        }}
      />
    </View>
  );
};

export const EditAddress = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <ScrollView
      style={{
        backgroundColor: colors.background,
        paddingTop: '10%',
        paddingHorizontal: 35,
        flex: 1,
      }}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <Image
          style={{marginTop: 9, width: 18, height: 18}}
          source={require('../assets/pics/backarrow.png')}></Image>
      </TouchableOpacity>
      <Text
        style={{
          marginBottom: 29,
          marginTop: 21,
          fontSize: 28,
          color: '#F8EFEB',
          fontFamily: 'GT-America-Medium',
        }}>
        EDIT ADDRESS
      </Text>

      <Field placeholder={'NAME'} marginBottom={12} />

      <Field placeholder={'LAST NAME'} marginBottom={12} />

      <View
        style={{
          width: '100%',
          borderWidth: 1,
          borderColor: colors.background,
          borderBottomColor: colors.primary,
          marginBottom: 12,
        }}>
        <Picker
          selectedValue={selectedValue}
          style={{color: '#646261', fontSize: size.body}}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          prompt="CHOOSE YOUR COUNTRY"
          itemStyle={{color: 'red'}}>
          <Picker.Item label="PAKISTAN" value="PAKISTAN" />
          <Picker.Item label="DUBAI" value="DUBAI" />
          <Picker.Item label="SAUDIA" value="SAUDIA" />
          <Picker.Item label="NEPAL" value="NEPAL" />
        </Picker>
      </View>

      <Field placeholder={'CITY'} marginBottom={12} />

      <Field placeholder={'ADDRESS'} marginBottom={12} />

      <Field placeholder={'POST CODE'} marginBottom={12} />

      <Field placeholder={'PHONE NUMBER'} marginBottom={40} />

      <Button
        text={'SAVE ADDRESS'}
        height={53}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </ScrollView>
  );
};

export default Address;
