import {Component} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import Theme from '../Theme';
import {SettingLink} from '../components/SettingLink';
import {Field, Password} from '../components/Inputs';
import {Button} from '../components/Button';

const colors = Theme.colors;
const size = Theme.size;
const title1 = Theme.title1;
const text = Theme.text;

const Payment = ({navigation}) => {
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
          fontSize: size.title1,
          color: '#F8EFEB',
          fontFamily: 'GT-America-Medium',
        }}>
        PAYMENT METHOD
      </Text>

      <TouchableOpacity
        style={{flexDirection: 'row'}}
        activeOpacity={0.7}
        onPress={() => {
          navigation.push('PaymentMethodInfo');
        }}>
        <Image
          source={require('../assets/pics/visa.png')}
          style={{marginRight: 8}}></Image>
        <SettingLink textHeading={'VISA'} marginTop={5} width={'75%'} />
      </TouchableOpacity>

      <TouchableOpacity
        style={{flexDirection: 'row'}}
        activeOpacity={0.7}
        onPress={() => {
          navigation.push('PaymentMethodInfo');
        }}>
        <Image
          source={require('../assets/pics/mastercard.png')}
          style={{marginRight: 8}}></Image>
        <SettingLink textHeading={'MASTERCARD'} marginTop={5} width={'75%'} />
      </TouchableOpacity>

      <TouchableOpacity
        style={{flexDirection: 'row'}}
        activeOpacity={0.7}
        onPress={() => {
          navigation.push('PaymentMethodInfo');
        }}>
        <Image
          source={require('../assets/pics/paypal.png')}
          style={{marginRight: 8}}></Image>
        <SettingLink textHeading={'PAYPAL'} marginTop={5} width={'75%'} />
      </TouchableOpacity>
    </View>
  );
};

export const PaymentMethodInfo = ({navigation}) => {
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
        PAYMENT METHOD
      </Text>

      <View>
        <Image
          height={12}
          width={12}
          style={{
            height: 35,
            width: 60,
            borderRadius: 8,
            position: 'absolute',
            left: '82%',
            top: 1,
          }}
          source={require('../assets/pics/visa.png')}
        />
      </View>
      <Field
        placeholder={'CARD NUMBER'}
        marginBottom={30}
        keyboardType={'numeric'}
      />
      <Field placeholder={'EXPIRY DATE'} marginBottom={30} />
      <Field placeholder={'HOLDER NAME'} marginBottom={30} />
      <Field placeholder={'CVV'} keyboardType={'numeric'} />

      <Button
        text={'NEXT'}
        height={53}
        marginTop={200}
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

export default Payment;
