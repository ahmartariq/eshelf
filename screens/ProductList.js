import React, { useState } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import Theme from '../Theme'
import { SvgXml } from 'react-native-svg'
import { BorderedButton } from '../components/Button'

const colors = Theme.colors
const size = Theme.size
const title1 = Theme.title1
const text = Theme.text

const Category = ['VIEW ALL', 'WHITE', 'BLACK', 'GREEN', 'BLUE', 'PINK']


const ProductList = () => {

    const [active, setActive] = useState(0)

    const backArrow = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8H1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 15L1 8L8 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

    return (
        <ScrollView style={{ backgroundColor: colors.background, paddingTop: '10%', paddingHorizontal: 15, flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <TouchableOpacity activeOpacity={0.7} >
                        <SvgXml xml={backArrow} />
                    </TouchableOpacity>
                    <Text style={Theme.eshlefWhite}>ESHELF</Text>
                </View>
                <View style={{ marginLeft: 20, alignItems: 'flex-end' }}>
                    <BorderedButton text='FILTERS' height={29} marginTop={10} />
                </View>
            </View>
            <ScrollView horizontal={true} style={{ flexDirection: 'row', flex: 1, marginTop: '3%' }} showsHorizontalScrollIndicator={false}>
                {
                    Category.map((c, key) => (
                        <TouchableOpacity style={{ marginRight: 30 }} activeOpacity={0.7} key={key} onPress={() => active === key ? setActive(0) : setActive(key)} >
                            <Text style={{ fontSize: size.headline, fontWeight:'bold', color: active === key ? colors.primary : colors.gray }}>{c}</Text>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
            <View>
                <TouchableOpacity>

                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default ProductList