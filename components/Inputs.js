import { useState } from "react"
import { TextInput, View, TouchableOpacity, Image } from "react-native"
import Theme from "../Theme"

const colors = Theme.colors
const size = Theme.size

export const Field = (props) => {

    return(
        <TextInput
        style={{
          marginTop: props.marginTop, marginBottom:props.marginBottom, borderBottomColor: colors.primary, borderBottomWidth: 1,  
          paddingBottom: 4, color: '#F8EFEB', opacity: 1, fontSize: size.body
        }}
        placeholder={props.placeholder}
        placeholderTextColor="#646261"
        keyboardType={props.keyboardType}
        autoComplete={props.autoComplete}
        value={props.value}
        onChangeText={props.onChangeText}
      />

    )
}

export const Password = props => {

    const Eye = require('../assets/pics/eye.png')
    const HiddenEye = require('../assets/pics/hiddenEye.png')
    const [secure, setSecure] = useState(true)

    return(
        <View style={{
            marginTop: props.marginTop, borderBottomColor: colors.primary, borderBottomWidth: 1,
            paddingBottom: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
          }}>
    
            <TextInput style={{
              color: '#F8EFEB', opacity: 1, fontSize: size.body
            }}
              placeholder={props.placeholder}
              placeholderTextColor="#646261"
              keyboardType='password'
              autoComplete='password'
              secureTextEntry={secure}
              value={props.value}
              onChangeText={props.onChangeText}
            />
            <TouchableOpacity
            activeOpacity={0.7}
            style={{ width: 30 , paddingHorizontal: 5 }}
            onPress={() => {setSecure(!secure) , console.log(secure)}}>
              <Image
                source={secure ? HiddenEye : Eye}
              />
            </TouchableOpacity>
          </View>
    )
}