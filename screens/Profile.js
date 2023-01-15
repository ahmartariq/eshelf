import React, {useEffect, useState} from 'react';
import {View,Text,ScrollView,TouchableOpacity,Switch,Alert,} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {SettingLink} from '../components/SettingLink';
import {BorderedButton} from '../components/Button';
import Theme from '../Theme';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import {getDatabase, ref,child, get} from 'firebase/database';
import {signOut} from '@firebase/auth';
import {auth} from '../FirebaseConfig';

const colors = Theme.colors;
const size = Theme.size;
const title1 = Theme.title1;
const text = Theme.text;

const userAccountOptions = ['PROFILE', 'SETTINGS', 'MY ORDERS', 'HELP'];

const shapeSVG = `<svg width="430" height="212" viewBox="0 0 430 212" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H430L440.154 56.4948C456.848 149.376 368.567 226.566 278.745 197.628L218.873 178.339C184.104 167.138 146.069 173.335 116.655 194.995C80.7824 221.41 30.7409 216.401 0.816042 183.4L0 182.5V0Z" fill="${colors.primary}"/>
</svg>
`;

const Profile = ({navigation}) => {
  const [active, setActive] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState('');

  const asyncData = async () => {
    try {
      const value = await AsyncStorage.getItem('userId');
      setData(value);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    asyncData();

    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${data}`))
      .then(snapshot => {
        if (snapshot.exists()) {
          setName(snapshot.val().name);
          setEmail(snapshot.val().email);
        } else {
          console.log('No data available');
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, [name, email]);


  const BlockView = () => {
    if (active === 0) {
      return <ProfileView name={name} email={email} navigation={navigation} />;
    } else if (active == 1) {
      return <UserSetting navigation={navigation}/>;
    }
  };


  return (
    <ScrollView style={{backgroundColor: colors.background, height: '100%', flex: 1 , paddingBottom: 100}}>
      <View>
        <SvgXml xml={shapeSVG} />
        <Text
          style={{
            fontFamily: 'Bilagike',
            fontSize: 87,
            color: 'white',
            position: 'absolute',
            top: 70,
            left: 25,
            zIndex: 1000,
          }}>
          ESHELF
        </Text>
      </View>

      <View style={{paddingHorizontal: 35}}>
        <ScrollView
          horizontal={true}
          style={{flexDirection: 'row', marginTop: '10%'}}
          showsHorizontalScrollIndicator={false}>
          {userAccountOptions.map((c, key) => (
            <TouchableOpacity
              style={{marginRight: 30}}
              activeOpacity={0.7}
              key={key}
              onPress={() => (active === key ? setActive(0) : setActive(key))}>
              <Text
                style={{
                  fontSize: size.headline,
                  color: active === key ? colors.primary : colors.gray,
                  fontWeight: 'bold',
                }}>
                {c}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <BlockView />
      </View>
    </ScrollView>
  );
};

const ProfileView = props => {
  const navigation = props.navigation;
  return (
    <ScrollView style={{marginTop: '12%' , marginBottom: 150}}>
      <Text
        style={{
          fontSize: size.headline,
          color: colors.gray,
          fontWeight: 'bold',
        }}>
        {props.name}
      </Text>
      <Text style={{color: colors.gray}}>{props.email}</Text>

      <View style={{marginTop: '13%'}}>
        <SettingLink
          textHeading={'ACCOUNT'}
          onPress={() => {
            navigation.push('Account');
          }}
        />
        <SettingLink
          textHeading={'ADDRESS'}
          onPress={() => {
            navigation.push('Address');
          }}
        />
        <SettingLink
          textHeading={'PAYMENT METHOD'}
          onPress={() => {
            navigation.push('Payment');
          }}
        />
      </View>

      <Text
        style={{
          marginTop: '8%',
          fontSize: 11,
          textAlign: 'justify',
          color: colors.gray,
          opacity: 0.7,
        }}>
        AT ESHELF WE TAKE YOUR PRIVACY VERY SERIOUSLY AND ARE COMMITED TO THE
        PROTECTION OF YOUR PERSONAL DATA. LEARN MORE ABOUT HOW WE CARE FOR AND
        USE YOUR DATEA IN OUR{' '}
        <Text style={{textDecorationLine: 'underline'}}>PRIVACY POLICY</Text>
      </Text>
    </ScrollView>
  );
};

const UserSetting = ({navigation}) => {
  const [colorSwitchValue, setColorSwitchValue] = useState(true);
  const [emailSwitchValue, setEmailSwitchValue] = useState(false);

  const colorToggleSwitch = value => {
    setColorSwitchValue(value);
  };
  const emailToggleSwitch = value => {
    setEmailSwitchValue(value);
  };

  const logoutAlert = () => {
    Alert.alert(
      'Log Out',
      'Are you sure?',
      [
        {
          text: 'Log Out',
          onPress: () => {
            Alert.alert('Logged Out.');
            signOut(auth)
              .then(() => {
                AsyncStorage.removeItem('userId')
                navigation.navigate("Login")
              })
              .catch(err => {
                console.log(err);
              });
          },
          style: 'Cancel',
        },
        {
          text: 'Cancel',
          style: 'Cancel',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  return (
    <ScrollView style={{marginTop: '18%' ,marginBottom: 150}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 30,
        }}>
        <Text style={{color: colors.gray, fontSize: size.body}}>DARK MODE</Text>
        <Switch
          style={{transform: [{scaleX: 1}, {scaleY: 1}]}}
          onValueChange={colorToggleSwitch}
          value={colorSwitchValue}
          thumbColor={'black'}
          trackColor={{true: '#D79E84', false: '#D7D7D7'}}
        />
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: colors.gray, fontSize: size.body}}>NOTIFY ME</Text>
        <Switch
          style={{transform: [{scaleX: 1}, {scaleY: 1}]}}
          onValueChange={emailToggleSwitch}
          value={emailSwitchValue}
          thumbColor={'black'}
          trackColor={{true: '#D79E84', false: '#D7D7D7'}}
        />
      </View>

      <BorderedButton
        text={'LOGOUT'}
        height={50}
        marginTop={'25%'}
        onPress={() => {
          logoutAlert();
        }}
      />

      <Text
        style={{
          marginTop: '10%',
          fontSize: 11,
          textAlign: 'justify',
          color: colors.gray,
          opacity: 0.7,
        }}>
        AT ESHELF WE TAKE YOUR PRIVACY VERY SERIOUSLY AND ARE COMMITED TO THE
        PROTECTION OF YOUR PERSONAL DATA. LEARN MORE ABOUT HOW WE CARE FOR AND
        USE YOUR DATEA IN OUR{' '}
        <Text style={{textDecorationLine: 'underline'}}>PRIVACY POLICY</Text>
      </Text>
    </ScrollView>
  );
};

const MyOrders = () => {
  return (
    <View style={{marginTop: '10%'}}>
      <Text style={{color: '#F8EFEB', fontSize: size.headline}}>ORDERS</Text>
    </View>
  );
};
const Help = () => {
  return (
    <View style={{marginTop: 40, width: '100%'}}>
      <Text
        style={{
          fontSize: size.headline,
          color: colors.gray,
          fontWeight: 'bold',
        }}></Text>
      <SettingLink textHeading={'SHOP AT ESHELF.COM'} />
      <SettingLink textHeading={'SHIPPING AND ORDER STATUS'} />
      <SettingLink textHeading={'PAYMENT'} />
      <SettingLink textHeading={'EXCHANGE AND RETURN'} />
      <SettingLink textHeading={'CONTACT US'} />
    </View>
  );
};

export default Profile;
