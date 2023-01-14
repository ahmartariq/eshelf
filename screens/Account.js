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
          navigation.pop();
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
      <SettingLink
        textHeading={'CHANGE EMAIL'}
        onPress={() => {
          navigation.push('ChangeEmail');
        }}
      />
      <SettingLink
        textHeading={'CHANGE PASSWORD'}
        onPress={() => {
          navigation.push('ChangePassword');
        }}
      />
    </View>
  );
};

export const ChangeEmail = ({navigation}) => {
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
      <TouchableOpacity
        onPress={() => {
          navigation.pop();
        }}>
        <Image
          style={{marginTop: 9, width: 18, height: 18}}
          source={require('../assets/pics/backarrow.png')}></Image>
      </TouchableOpacity>
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
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

export const ChangePassword = ({navigation}) => {
  
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
      <TouchableOpacity
        onPress={() => {
          navigation.pop();
        }}>
        <Image
          style={{marginTop: 9, width: 18, height: 18}}
          source={require('../assets/pics/backarrow.png')}></Image>
      </TouchableOpacity>
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

      <Password 
        placeholder={'CURRENT PASSWORD '} 
        onChangeText={setCurrentPassword}
        value={currentPassword}

      />

      <Password
        placeholder={'NEW PASSWORD '}
        marginTop={'7%'}
        onChangeText={setNewPassword}
        value={newPassword}
      />

      <Password
        placeholder={'RETYPE NEW PASSWORD '}
        marginTop={'7%'}
        onChangeText={setRetypeNewPassword}
        value={retypeNewPassword}
      />

      <Button
        height={50}
        text={'SAVE'}
        marginTop={'10%'}
        onPress={() => {
          // navigation.popToTop();
        }}
      />
    </View>
  );
};

export default Account;
