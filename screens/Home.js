import React from 'react'
import { View, Image, ScrollView, Text } from 'react-native'
import Theme from '../Theme'
import Swiper from 'react-native-swiper'

const Home1 = '../assets/pics/home1.png'
const Home2 = '../assets/pics/home2.png'
const Home3 = '../assets/pics/home3.png'
const colors = Theme.colors


const eshlefBlack = Theme.eshlefBlack

export default Home = () => {
    return (
        <View contentContainerStyle={{ flexGrow: 1, position: 'relative' }}>
            <Text style={eshlefBlack}>ESHELF</Text>
            <View style={{ width: '100%', height: '100%'}}>

            <Swiper  horizontal={false} style={{ position: 'relative' }} showsButtons={false} dotColor={colors.background} activeDotColor={colors.background} dotStyle={{ width: 6, height: 6, marginRight: 4 }} activeDotStyle={{ borderWidth: 1, borderColor: colors.background }} paginationStyle={{ flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', height: '100%', justifyContent: 'center', marginRight: 10 }}>
                <View>
                    <Image source={require(Home1)} />
                </View>
                <View>
                    <Image source={require(Home2)} />
                </View>
                <View>
                    <Image source={require(Home3)} />
                </View>
                <View style={{ flex: 1, height: 770, justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                    <Text style={Theme.title1Black}>JOIN OUR NEWS LETTER</Text>
                    <Text style={{ alignSelf: 'flex-start', position: 'absolute', bottom: 130, left: 21, fontSize: 14, fontFamily: 'GT-America-Regular' }}>PRIVACY POLICY | TERMS OF USE</Text>
                </View>
            </Swiper>
            </View>
        </View>
    )
}
