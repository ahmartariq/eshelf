import React , {useState , useRef} from 'react'
import { View , Animated ,  Text , TouchableOpacity } from 'react-native'
import Theme from '../Theme'
import BottomSheet from '@gorhom/bottom-sheet';


const colors = Theme.colors
const size = Theme.size
const title1 = Theme.title1
const text = Theme.text

const Product = () => {

  // const fadeAnim = useRef(new Animated.Value(0)).current

  // useEffect(() => {
  //   Animated.timing(
  //     fadeAnim,
  //     {
  //       toValue: 1,
  //       duration: 10000,
  //     }
  //   ).start();
  // }, [fadeAnim])
  
  // const [open, setOpen] = useState(false)
  return (
    <View style={{flex : 1 , backgroundColor : colors.background , position: 'relative'}}>
        
        {/* <TouchableOpacity 
          onPress={ () => setOpen(!open)} 
          activeOpacity={0.9}
          style={open ? 
            {width : '100%' , height: 688 , position: 'absolute', bottom: 0 , left : 0 , backgroundColor : 'white' , borderTopLeftRadius: 25 , borderTopRightRadius : 25}
            :{width : '100%' , height: 186 , position: 'absolute', bottom: 0 , left : 0 , backgroundColor : 'white' , borderTopLeftRadius: 25 , borderTopRightRadius : 25 }}>
          
        </TouchableOpacity> */}
    </View>
  )
}

export default Product