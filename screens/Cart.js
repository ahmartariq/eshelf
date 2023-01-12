import React, { useState } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { SvgXml } from 'react-native-svg';
import CartProductCard from '../components/CartProductCard';
import Theme from '../Theme'
import { Button } from '../components/Button';


const product = [
  {
    name: 'OVERSIZED CYBER GRAPHIC HOODED SWEATSHIRT',
    price: 3000.00,
    quantity: 1,
    image: require('../assets/pics/product.png'),
    color: 'black',
  },
  {
    name: 'OVERSIZED AERONAUTICAL GRAPHIC HOODED SWEATSHIRT',
    price: 3200.00,
    quantity: 1,
    image: require('../assets/pics/product2.png'),
    color: 'black',
  },
  {
    name: 'OVERSIZED AERONAUTICAL GRAPHIC HOODED SWEATSHIRT',
    price: 3200.00,
    quantity: 1,
    image: require('../assets/pics/product2.png'),
    color: 'black',
  },
]

const colors = Theme.colors;
const size = Theme.size;

const Cart = () => {

  const [value, setValue] = useState()


  const checkout = () => {
    console.log("checkout ");
  }
  return (
    <ScrollView style={{ backgroundColor: colors.background, height: '100%', paddingTop: '10%', paddingHorizontal: 10, flex: 1 }}>
      <Text style={Theme.eshlefWhite}>ESHELF</Text>
      <View style={{ marginTop: '5%', width: '100%' }}>
        <Text style={{ fontSize: size.headline, color: "#F8EFEB", marginBottom: '3%' }}>{`SHOPPING BAG (${product.length})`}</Text>

        <View style={{ marginBottom: 20 }}>
          {
            product.map(p => (
              <View style={{ marginTop: '5%', width: '100%' }}>
                <Text style={{ fontSize: size.headline, color: colors.gray, fontFamily: Theme.fonts.medium, fontSize: 12 }}>{p.name}</Text>
                <View style={{ flexDirection: 'row', width: '100%', marginTop:'2%' }}>

                  {/* left side  */}
                  <View style={{ width: '50%' }}>
                    <Image source={p.image} style={{ width: '100%', height: 231 }} />
                  </View>

                  {/* Right Side  */}
                  <View style={{ width: '50%', paddingLeft: '4%'}}>
                    <View style={{ flex: 1, }}>
                      <Text style={{ marginBottom: 22, color: colors.text }}>{p.color}</Text>
                      <Text style={{ marginBottom: 22, color: colors.text }}>Medium</Text>

                      <View style={{ flexDirection: 'row', alignItems: 'center' , marginBottom: 22}}>
                        <TouchableOpacity activeOpacity={0.7} style={{justifyContent: 'center' , alignItems: 'center'  , width: 20, height: 20, borderWidth: 1, borderColor: colors.primary, borderRadius: 50 }}>
                          <Text style={{  color: colors.primary}}>-</Text>
                        </TouchableOpacity>
                          <View style={{justifyContent: 'center', alignItems: 'center', paddingHorizontal: 8}}><Text style={{ color: colors.text}}>{p.quantity}</Text></View>
                        <TouchableOpacity activeOpacity={0.7} style={{ width: 20, height: 20, borderWidth: 1, borderColor: colors.primary, borderRadius: 50 , justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={{ color: colors.primary}}>+</Text>
                        </TouchableOpacity>
                      </View>

                      <Text style={{ marginBottom: 22, color: colors.primary }}>Rs. {p.price}</Text>

                     
                      <TouchableOpacity activeOpacity={0.7}>
                        <Text style={{ marginBottom: 22, color: colors.text }}>Delete</Text>
                      </TouchableOpacity>

                    </View>
                  </View>
                </View>
              </View>
            ))
          }
        </View>
      </View>
      <View style = {{width: '100%', borderWidth: 1 , borderTopColor: colors.text, height: 1, marginBottom: 20 }}>
      </View>
      <View style={{width: '100%' , flexDirection: 'row', marginBottom: 200}}>
        <View style={{width: '35%' , flexDirection: 'column'}}>
          <Text style={{color: colors.text , fontSize: Theme.size.body}}>Total 12000</Text>
          <Text style={{color: colors.text , fontSize: 10}}>VAT INCLUDED</Text>
        </View>
          <Button text={"CHECKOUT"} width={200} onPress={checkout}/>
      </View>
    </ScrollView>
  )
}

export default Cart