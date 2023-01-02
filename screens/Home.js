import React from 'react'
import { View, Image , ScrollView , Text} from 'react-native'
import Theme  from '../Theme'

const Home1 = '../assets/pics/home1.png'
const Home2 = '../assets/pics/home2.png'
const Home3 = '../assets/pics/home3.png'


const eshlefBlack = Theme.eshlefBlack
export default Home = () => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 , position : 'relative' }}>
        <Text style={eshlefBlack}>ESHELF</Text>
            <Image source={require(Home1)}/>
            <Image source={require(Home2)}/>
            <Image source={require(Home3)}/>
            <View style={{flex : 1 , height : 770 , justifyContent :'center' , alignItems : 'center' , position : 'relative'}}>
                    <Text style={Theme.title1Black}>JOIN OUR NEWS LETTER</Text>
                    <Text style={{alignSelf : 'flex-start' , position : 'absolute' , bottom : 130 , left : 21 , fontSize : 14 , fontFamily : 'GT-America-Regular' }}>PRIVACY POLICY | TERMS OF USE</Text>
            </View>
        </ScrollView>
    )
}
