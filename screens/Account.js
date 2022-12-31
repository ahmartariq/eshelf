import { Text, TextInput, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Theme from '../Theme';
import {SettingLink} from '../components/SettingLink';
import { Field, Password } from '../components/Inputs';
import { Button } from '../components/Button';

const colors = Theme.colors
const size = Theme.size
const title1 = Theme.title1
const text = Theme.text

const handleButton = () => {
    alert("handle")
};

const Account = () => {

    return(
        <View style={{ backgroundColor: colors.background , paddingTop: '10%', paddingHorizontal: 35 , flex: 1}}>
            <Image style={{marginTop:9, width:18, height:18 }} source={require("../assets/pics/backarrow.png")}></Image>
            <Text style={{marginBottom:71, marginTop:21, fontSize:28 ,color:'#F8EFEB', fontFamily: 'GT-America-Medium'}}>Account</Text>
            <SettingLink textHeading={"CHANGE EMAIL"} onpress={handleButton}/>
            <SettingLink textHeading={"CHANGE PASSWORD"} onpress={handleButton}/>
        </View> 
    )
}


export const ChangeEmail = () => {

    return(
        <View style={{ backgroundColor: colors.background , paddingTop: '10%', paddingHorizontal: 35 , flex: 1}}>
            <Image style={{marginTop:9, width:18, height:18 }} source={require("../assets/pics/backarrow.png")}></Image>
            <Text style={{marginBottom:12, marginTop:21, fontSize:28 ,color:'#F8EFEB', fontFamily: 'GT-America-Medium'}}>CHANGE EMAIL</Text>
            <Text style={{color:colors.gray, marginBottom:36 }}>YOUR CURRENT EMAIL ADDRESS <Text style={{fontWeight:'bold'}}>IAMZAIBI905@GMAIL.COM</Text></Text>
            
            <Password placeholder={"CURRENT PASSWORD "}  />  

            <Field placeholder={"NEW EMAIL"} marginTop={"7%"} />
            
            <Field placeholder={"RETYPE NEW EMAIL"} marginTop={"7%"} />

            <Button height={50} text={"SAVE"} marginTop={"10%"} />

        </View>
    )
}


export const ChangePassword = () => {

    return(
        <View style={{ backgroundColor: colors.background , paddingTop: '10%', paddingHorizontal: 35 , flex: 1}}>
            <Image style={{marginTop:9, width:18, height:18 }} source={require("../assets/pics/backarrow.png")}></Image>
            <Text style={{marginBottom:80, marginTop:21, fontSize:28 ,color:'#F8EFEB', fontFamily: 'GT-America-Medium'}}>CHANGE PASSWORD</Text>
            
            <Password placeholder={"CURRENT PASSWORD "}  />  

            <Password placeholder={"NEW PASSWORD "} marginTop={"7%"} />
            
            <Password placeholder={"RETYPE NEW PASSWORD "} marginTop={"7%"} />

            <Button height={50} text={"SAVE"} marginTop={"10%"} />

        </View>
    )
}

export default Account;