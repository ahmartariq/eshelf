import React, { useState, useRef, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Theme from '../Theme'
import { Button } from '../components/Button'
import { SvgXml } from 'react-native-svg'
import Swiper from 'react-native-swiper'

const colors = Theme.colors
const size = Theme.size
const fonts = Theme.fonts


const productSize = ["S", "M", "L", "XL"]

const bag = `<svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.9 2L2 7.2V25.4C2 26.0896 2.27393 26.7509 2.76152 27.2385C3.24912 27.7261 3.91044 28 4.6 28H22.8C23.4896 28 24.1509 27.7261 24.6385 27.2385C25.1261 26.7509 25.4 26.0896 25.4 25.4V7.2L21.5 2H5.9Z" stroke="#D79E84" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 7.2002H25.4" stroke="#D79E84" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.9 12.3999C18.9 13.779 18.3521 15.1017 17.377 16.0769C16.4018 17.052 15.0791 17.5999 13.7 17.5999C12.3209 17.5999 10.9982 17.052 10.023 16.0769C9.04786 15.1017 8.5 13.779 8.5 12.3999" stroke="#D79E84" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

const Product = () => {

  const [open, setOpen] = useState(false)
  const [size, setSize] = useState(0)
  const [color, setColor] = useState(colors.gray)
  const [isAccordion, setIsAccordion] = useState('none')
  const [color2, setColor2] = useState(colors.gray)
  const [isAccordion2, setIsAccordion2] = useState('none')

  const accordion = () => {
    setColor(color === colors.gray ? colors.tertiary : colors.gray)
    setIsAccordion(isAccordion === 'none' ? 'flex' : 'none')
  }

  const accordion2 = () => {
    setColor2(color2 === colors.gray ? colors.tertiary : colors.gray)
    setIsAccordion2(isAccordion2 === 'none' ? 'flex' : 'none')
  }
  return (
    <View style={{ flex: 1, backgroundColor: "white"}}>
    <View style={{width: '100%' , height: 600}}>
      <Swiper style={{position: 'relative'}} showsButtons={false} dotColor={colors.background} activeDotColor={colors.background} dotStyle={{width:6, height:6 , marginRight: 4}} activeDotStyle={{borderWidth: 1 , borderColor: colors.background}} paginationStyle={{flexDirection: 'column' , justifyContent: 'flex-end' ,  alignItems: 'flex-end' , height: '100%' , justifyContent: 'center' , marginRight: 10}}>
        <View >
          <Image source={require('../assets/pics/pic1.png')} style={{width: '100%' , height: 600}}/>
        </View>
        <View >
          <Image source={require('../assets/pics/pic2.png')} style={{width: '100%' , height: 600}}/>
        </View>
        <View >
          <Image source={require('../assets/pics/pic3.png')} style={{width: '100%' , height: 600}}/>
        </View>
        <View >
          <Image source={require('../assets/pics/pic4.png')} style={{width: '100%' , height: 600}}/>
        </View>
        <View >
          <Image source={require('../assets/pics/pic5.png')} style={{width: '100%' , height: 600}}/>
        </View>
      </Swiper>
    </View>

      <TouchableOpacity
        onPress={() => setOpen(!open)}
        activeOpacity={0.9}
        style={open ?
          { width: '100%', height: 688, position: 'absolute', bottom: 0, left: 0, backgroundColor: colors.background, borderTopLeftRadius: 25, borderTopRightRadius: 25, padding: 20 }
          : { width: '100%', height: 186, position: 'absolute', bottom: 0, left: 0, backgroundColor: colors.background, borderTopLeftRadius: 25, borderTopRightRadius: 25, padding: 20 }}>
        <Text style={{ fontSize: 20, color: colors.gray, fontFamily: 'GT-America-Regular', paddingRight: 80, lineHeight: 25 }}>OVERSIZED CYBER GRAPHIC HOODED SWEATSHIRT</Text>
        <Text style={{ fontSize: 20, color: colors.primary, fontFamily: 'GT-America-Regular', marginTop: 19 }}>3000.00 PKR</Text>
        <View style={{ flexDirection: 'row', marginTop: 6, alignItems: 'center', justifyContent: 'space-between' }}>
          <Button text={'ADD TO BAG'} height={35} width={150} />
          <TouchableOpacity activeOpacity={0.7} style={{ padding: 5 }}>
            <SvgXml xml={bag} />
          </TouchableOpacity>
        </View>
        <Text style={{ color: colors.gray, fontSize: size.headline, fontFamily: fonts.medium, marginTop: 37 }}>Select Size</Text>

        <View style={{ marginTop: 15, flexDirection: 'row' }}>
          {
            productSize.map((s, index) => (
              <TouchableOpacity key={index} onPress={() => setSize(index)} style={size === index ? { padding: 2, width: 35, height: 35, borderRadius: 5, backgroundColor: colors.primary, borderColor: colors.primary, borderWidth: 1.24, justifyContent: 'center', alignItems: 'center', marginRight: 10 } : { padding: 2, width: 35, height: 35, borderRadius: 5, borderColor: colors.primary, borderWidth: 1.24, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                <Text style={size === index ? { color: colors.background, fontSize: 21, fontFamily: fonts.regular } : { color: colors.primary, fontSize: 21, fontFamily: fonts.regular }}>{s}</Text>
              </TouchableOpacity>
            ))
          }
        </View>

        <TouchableOpacity activeOpacity={0.9} style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 45 }} onPress={accordion}>
          <Text style={{ fontSize: size.headline, fontFamily: fonts.medium, color: color }}>COMPOSITION AND CARE</Text>
          <Text style={{ fontSize: size.headline, fontFamily: fonts.medium, color: color }}>-</Text>
        </TouchableOpacity>
        <Text style={{ display: isAccordion, marginTop: 15, fontFamily: fonts.regular, fontSize: size.body, color: colors.gray }}>80% COTTON, 20% POLYESTER
          MACHINE WASH UP TO 30C/86F, GENTLE CYCLE
          DO NOT BLEACH
          IRON UP TO 110C/230F
          DO NOT IRON DIRECTLY ON PRINTS/EMBROIDERY/EMBELLISHMENTS
          DO NOT DRY CLEAN
          DO NOT TUMBLE DRY </Text>

        <TouchableOpacity activeOpacity={0.9} style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 45 }} onPress={accordion2}>
          <Text style={{ fontSize: size.headline, fontFamily: fonts.medium, color: color2 }}>SHIPPING AND EXCHANGE</Text>
          <Text style={{ fontSize: size.headline, fontFamily: fonts.medium, color: color2 }}>-</Text>
        </TouchableOpacity>
        <Text style={{ display: isAccordion2, marginTop: 15, fontFamily: fonts.regular, fontSize: size.body, color: colors.gray }}>
          Thank you for shopping at Eshelf ! {'\n\n'}
          We offer refund and/or exchange within the first 30 days of your purchase, if 30 days have passed since your purchase
          , you will not be offered a refund and/or exchange of any kind.</Text>

      </TouchableOpacity>
    </View>
  )
}

export default Product