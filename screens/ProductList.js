import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Flatass,
} from 'react-native';

import Theme from '../Theme';
import {SvgXml} from 'react-native-svg';
import {BorderedButton} from '../components/Button';

const colors = Theme.colors;
const size = Theme.size;
const title1 = Theme.title1;
const text = Theme.text;

const Category = ['VIEW ALL', 'WHITE', 'BLACK', 'GREEN', 'BLUE', 'PINK'];

const product = [
  {
    name: 'OVERSIZED CYBER GRAPHIC HOODED SWEATSHIRT',
    price: 3000.0,
    image: require('../assets/pics/product.png'),
    color: 'black',
    type: 'sweatshirt',
  },
  {
    name: 'OVERSIZED AERONAUTICAL GRAPHIC HOODED SWEATSHIRT',
    price: 3200.0,
    image: require('../assets/pics/product2.png'),
    color: 'black',
    type: 'sweatshirt',
  },
  {
    name: 'OVERSIZE SCRIBBLING GRAPHIC SHIRT',
    price: 2500.0,
    image: require('../assets/pics/product3.png'),
    color: 'black',
    type: 'shirt',
  },
  {
    name: 'REGULAR FIT BROAD STRIPED SWEATER',
    price: 3500.0,
    image: require('../assets/pics/product4.png'),
    color: 'black',
    type: 'sweater',
  },
  {
    name: 'REGULAR FIT BROAD STRIPED SWEATER',
    price: 3500.0,
    image: require('../assets/pics/product5.png'),
    color: 'green',
    type: 'sweater',
  },
  {
    name: 'ANKLE HIGH SNEAKERS',
    price: 6000.0,
    image: require('../assets/pics/product6.png'),
    color: 'white',
    type: 'sneaker',
  },
  {
    name: 'STANDARD STRAIGHT FIT FADED JEANS',
    price: 2200.0,
    image: require('../assets/pics/product7.png'),
    color: 'blue',
    type: 'pant',
  },
];

const facebook = '../assets/pics/product7.png';

// let value  = []

const ProductList = ({navigation}) => {
  const [value, setValue] = useState([]);
  const [select, setSelect] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(0);
    setValue(
      product.map(item => ({
        ...item,
        item,
      })),
    );

    setSelect(product.map(e => e));
  }, []);

  const changeCategory = (e, key) => {
    setActive(key);
    const catSelected =
      e.target._internalFiberInstanceHandleDEV.memoizedProps.children.toLowerCase();

    if (catSelected === 'view all') {
      setSelect(product.map(e => e));
    } else {
      setSelect(product.filter(val => val.color === catSelected).map(c => c));
    }
  };

  const hanger = `<svg width="58" height="40" viewBox="0 0 58 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M54.5677 29.4893C54.5052 29.4478 54.3435 29.4119 54.2764 29.3819L29.9689 18.6377V15.1468C34.5926 14.5908 36.8755 11.5404 36.8755 7.61851C36.8755 3.27582 33.8193 0 29.7019 0C25.3789 0 21.7516 3.56363 21.7516 7.78266C21.7516 8.50854 22.3528 9.09806 23.0786 9.09806C23.2948 9.09806 23.4959 9.03339 23.675 8.94201C24.1004 8.72346 24.4032 8.2935 24.4032 7.78266C24.4032 5.03847 26.9023 2.63081 29.7481 2.63081C32.4078 2.63081 34.3393 4.72878 34.3393 7.61851C34.3393 10.4619 32.0413 12.6062 28.9088 12.6062C28.183 12.6062 27.657 13.1957 27.657 13.9216V16.4923V19.0735C27.657 19.0989 27.6061 19.1198 27.6086 19.1451L4.3045 30.1599C0.868046 31.3979 -0.308707 34.2147 0.0669839 36.3647C0.45307 38.5759 2.3279 40 4.75647 40H51.0422C53.9169 40 56.172 38.5124 56.9269 36.018C57.6724 33.5606 56.7015 30.9112 54.5677 29.4893ZM54.4093 35.4158C53.992 36.7971 52.7645 37.6883 51.0433 37.6883H4.75647C3.58092 37.6883 2.80984 37.0363 2.64109 36.0724C2.44926 34.9719 3.15664 33.4092 5.27999 32.637L29.399 21.204L53.1932 31.799C54.3111 32.5976 54.8105 34.0911 54.4093 35.4158Z" fill="#F8EFEB"/>
    </svg>`;
  const backArrow = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8H1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 15L1 8L8 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

  return (
    <ScrollView
      style={{
        backgroundColor: colors.background,
        paddingTop: '10%',
        paddingHorizontal: 10,
        flex: 1,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <TouchableOpacity activeOpacity={0.7}>
            <SvgXml xml={backArrow} />
          </TouchableOpacity>
          <Text style={Theme.eshlefWhite}>ESHELF</Text>
        </View>
        <View style={{marginLeft: 20, alignItems: 'flex-end'}}>
          <BorderedButton text="FILTERS" height={29} marginTop={10} />
        </View>
      </View>
      <ScrollView
        horizontal={true}
        style={{flexDirection: 'row', flex: 1, marginTop: '3%'}}
        showsHorizontalScrollIndicator={false}>
        {Category.map((c, key) => (
          <TouchableOpacity
            style={{marginRight: 30}}
            activeOpacity={0.7}
            key={key}
            onPress={e => changeCategory(e, key)}>
            <Text
              style={{
                fontSize: size.headline,
                color: active === key ? colors.primary : colors.gray,
              }}>
              {c}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View
        style={{
          flexWrap: 'wrap',
          width: '100%',
          flexDirection: 'row',
          paddingBottom: 80,
        }}>
        {select.length > 0 ? (
          select.map((sel, key) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Product');
              }}
              activeOpacity={0.9}
              key={key}
              style={
                key % 4 === 0 && key !== 0
                  ? {width: '100%', marginVertical: 9.5}
                  : {width: '44%', margin: 9.5, overflow: 'hidden'}
              }>
              <Image
                source={sel.image}
                style={
                  key % 4 === 0 && key !== 0
                    ? {width: '100%'}
                    : {width: '100%', height: 200}
                }
              />
              <Text
                style={{
                  color: colors.text,
                  fontFamily: 'GT-America-Regular',
                  fontSize: 12,
                  marginTop: 4,
                }}>
                {sel.name}
              </Text>
              <Text
                style={{
                  color: colors.primary,
                  fontFamily: 'GT-America-Regular',
                  fontSize: 10,
                  marginTop: 4,
                }}>
                Rs. {sel.price}
              </Text>
            </TouchableOpacity>
          ))
        ) : (
          <View
            style={{
              width: '100%',
              height: 500,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <SvgXml xml={hanger} style={{marginBottom: 12}} />
            <Text
              style={{
                fontFamily: 'GT-America-Medium',
                fontSize: 28,
                color: colors.text,
              }}>
              No Product Available{' '}
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default ProductList;
