import {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Theme from '../Theme';
import {SettingLink} from '../components/SettingLink';
import {Field, Password} from '../components/Inputs';
import {Button} from '../components/Button';

import {NavigationContainer} from '@react-navigation/native';

const colors = Theme.colors;
const size = Theme.size;
const title1 = Theme.title1;
const text = Theme.text;

const handleButton = () => {
  alert('handle');
};

const Account = ({navigation}) => {
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
          navigation.navigate('Profile');
        }}>
        <Image
          style={{marginTop: 9, width: 18, height: 18}}
          source={require('../assets/pics/backarrow.png')}></Image>
      </TouchableOpacity>
      <Text
        style={{
          marginBottom: 71,
          marginTop: 21,
          fontSize: 28,
          color: '#F8EFEB',
          fontFamily: 'GT-America-Medium',
        }}>
        Account
      </Text>
      <SettingLink textHeading={'CHANGE EMAIL'} onpress={handleButton} />
      <SettingLink textHeading={'CHANGE PASSWORD'} onpress={handleButton} />
    </View>
  );
};

export const ChangeEmail = () => {
  const handleChangeEmailButton = () => {
    console.log(currentPassword);
    console.log(newEmail);
    console.log(retypeNewEmail);
  };

  const [currentPassword, setCurrentPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [retypeNewEmail, setRetypeNewEmail] = useState('');

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
          marginBottom: 12,
          marginTop: 21,
          fontSize: 28,
          color: '#F8EFEB',
          fontFamily: 'GT-America-Medium',
        }}>
        CHANGE EMAIL
      </Text>
      <Text style={{color: colors.gray, marginBottom: 36}}>
        YOUR CURRENT EMAIL ADDRESS{' '}
        <Text style={{fontWeight: 'bold'}}>IAMZAIBI905@GMAIL.COM</Text>
      </Text>

      <Password
        placeholder={'CURRENT PASSWORD '}
        onChangeText={setCurrentPassword}
        value={currentPassword}
      />

      <Field
        placeholder={'NEW EMAIL'}
        marginTop={'7%'}
        onChangeText={setNewEmail}
        value={newEmail}
      />

      <Field
        placeholder={'RETYPE NEW EMAIL'}
        marginTop={'7%'}
        onChangeText={setRetypeNewEmail}
        value={retypeNewEmail}
      />

      <Button
        height={50}
        text={'SAVE'}
        marginTop={'10%'}
        onpress={handleChangeEmailButton}
      />
    </View>
  );
};

export const ChangePassword = () => {
  const handleChangePasswordButton = () => {
    console.log(currentPassword);
    console.log(newPassword);
    console.log(retypeNewPassword);
  };

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [retypeNewPassword, setRetypeNewPassword] = useState('');

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
        CHANGE PASSWORD
      </Text>

      <Password placeholder={'CURRENT PASSWORD '} />

      <Password
        placeholder={'NEW PASSWORD '}
        marginTop={'7%'}
        onChangeText={newPassword}
        value={setNewPassword}
      />

      <Password
        placeholder={'RETYPE NEW PASSWORD '}
        marginTop={'7%'}
        onChangeText={retypeNewPassword}
        value={setRetypeNewPassword}
      />

      <Button
        height={50}
        text={'SAVE'}
        marginTop={'10%'}
        onpress={handleChangePasswordButton}
      />
    </View>
  );
};

export default Account;
