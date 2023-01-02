import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import { SettingLink } from '../components/SettingLink';
import Theme from '../Theme';

const colors = Theme.colors;
const size = Theme.size;
const title1 = Theme.title1;
const text = Theme.text;

const userAccountOptions = ['PROFILE', 'SETTINGS', 'MY ORDERS', 'HELP'];

const shapeSVG = `<svg width="430" height="212" viewBox="0 0 430 212" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H430L440.154 56.4948C456.848 149.376 368.567 226.566 278.745 197.628L218.873 178.339C184.104 167.138 146.069 173.335 116.655 194.995C80.7824 221.41 30.7409 216.401 0.816042 183.4L0 182.5V0Z" fill="${colors.primary}"/>
</svg>
`;

const Profile = () => {
  const [active, setActive] = useState(0);

  const BlockView = () => {
    if(active === 0 ){
        return <ProfileView/>
    } 
    else if(active == 1){
        return <UserSetting />
    }
    else if(active == 2){
        return <MyOrders />
    }
    else{
        return <Help />
    }
  }

  console.log(active);
  return (
    <View style={{backgroundColor: colors.background, height: '100%', flex: 1}}>
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
          style={{ flexDirection: 'row', marginTop: '10%'}}
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
                  color: active === key ? colors.primary : colors.gray, fontWeight:'bold'
                }}>
                {c}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        <BlockView />
      </View>
    </View>
  );
};

const ProfileView = () => {
    return(
        <View style={{marginTop:'12%'}}>   
        <Text
          style={{
            fontSize: size.headline,
            color: colors.gray,
            fontWeight: 'bold',
          }}>
          MUHAMMAD SHAHZAIB K
        </Text>
        <Text style={{color:colors.gray, }}>IAMZAIBI905@GMAIL.COM</Text>

        <View style={{marginTop:'13%'}}>
            <SettingLink textHeading={"ACCOUNT"} />
            <SettingLink textHeading={"ADDRESS"} />
            <SettingLink textHeading={"PAYMENT METHOD"} />
        </View>

        <Text style={{marginTop:'8%', fontSize:11, textAlign: 'justify', color:colors.gray, opacity:0.7 }}>AT ESHELF WE TAKE YOUR PRIVACY VERY SERIOUSLY AND ARE COMMITED TO THE PROTECTION OF YOUR PERSONAL DATA. LEARN MORE ABOUT HOW WE CARE FOR AND USE YOUR DATEA IN OUR <Text style={{textDecorationLine: 'underline'}}>PRIVACY POLICY</Text>
        </Text>
        </View>
    )
}


const UserSetting = () => {
    return(
        <View>   
        <Text
          style={{
            fontSize: size.headline,
            color: colors.gray,
            fontWeight: 'bold',
          }}>
          UserSetting
        </Text>
        </View>
    )
}
const MyOrders = () => {
    return(
        <View>   
        <Text
          style={{
            fontSize: size.headline,
            color: colors.gray,
            fontWeight: 'bold',
          }}>
          MyOrders
        </Text>
        </View>
    )
}
const Help = () => {
    return(
        <View style={{marginTop:40, width:'100%'}}>   
        <Text style={{fontSize: size.headline, color: colors.gray, fontWeight: 'bold',
          }}>
        </Text>
            <SettingLink textHeading={'SHOP AT ESHELF.COM'} />
            <SettingLink textHeading={'SHIPPING AND ORDER STATUS'} />
            <SettingLink textHeading={'PAYMENT'} />
            <SettingLink textHeading={'EXCHANGE AND RETURN'} />
            <SettingLink textHeading={'CONTACT US'} />

        </View>
    )
}

export default Profile;
