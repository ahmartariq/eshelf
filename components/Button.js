import { Text , TouchableOpacity } from "react-native"
import Theme from "../Theme"

export const Button = (props) => {
    const colors = Theme.colors
    const size = Theme.size
    return(
        <TouchableOpacity onPress={props.onPress}
        activeOpacity={0.7}
        style={{backgroundColor: colors.primary, height: props.height , marginTop: props.marginTop, justifyContent: 'center', alignItems: 'center'}}
        >
          <Text style={{color: colors.text , fontFamily: 'rg' , fontSize: size.body, letterSpacing: 3}}>{props.text}</Text>
        </TouchableOpacity>
    )
}