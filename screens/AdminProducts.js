import {Text,View,Image,ScrollView,TouchableOpacity,Alert,} from 'react-native';
import React, {useState, useEffect} from 'react';
import Theme from '../Theme';
import {Button, BorderedButton} from '../components/Button';
import {SvgXml} from 'react-native-svg';
import {ref, onValue, remove} from 'firebase/database';
import {auth, db} from '../FirebaseConfig';
import { getDownloadURL, getStorage , ref as storageRef } from 'firebase/storage';
const colors = Theme.colors;
const size = Theme.size;
const title1 = Theme.title1;
const text = Theme.text;


const cancelSvg = `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.2373 1L1 2.2373L7.38135 8.61865L1 15L2.2373 16.2373L8.61865 9.85596L15 16.2373L16.2373 15L9.85596 8.61865L16.2373 2.2373L15 1L8.61865 7.38135L2.2373 1Z" fill="#333333" stroke="#333333" stroke-linejoin="round"/>
</svg>`;

const hanger = `<svg width="58" height="40" viewBox="0 0 58 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M54.5677 29.4893C54.5052 29.4478 54.3435 29.4119 54.2764 29.3819L29.9689 18.6377V15.1468C34.5926 14.5908 36.8755 11.5404 36.8755 7.61851C36.8755 3.27582 33.8193 0 29.7019 0C25.3789 0 21.7516 3.56363 21.7516 7.78266C21.7516 8.50854 22.3528 9.09806 23.0786 9.09806C23.2948 9.09806 23.4959 9.03339 23.675 8.94201C24.1004 8.72346 24.4032 8.2935 24.4032 7.78266C24.4032 5.03847 26.9023 2.63081 29.7481 2.63081C32.4078 2.63081 34.3393 4.72878 34.3393 7.61851C34.3393 10.4619 32.0413 12.6062 28.9088 12.6062C28.183 12.6062 27.657 13.1957 27.657 13.9216V16.4923V19.0735C27.657 19.0989 27.6061 19.1198 27.6086 19.1451L4.3045 30.1599C0.868046 31.3979 -0.308707 34.2147 0.0669839 36.3647C0.45307 38.5759 2.3279 40 4.75647 40H51.0422C53.9169 40 56.172 38.5124 56.9269 36.018C57.6724 33.5606 56.7015 30.9112 54.5677 29.4893ZM54.4093 35.4158C53.992 36.7971 52.7645 37.6883 51.0433 37.6883H4.75647C3.58092 37.6883 2.80984 37.0363 2.64109 36.0724C2.44926 34.9719 3.15664 33.4092 5.27999 32.637L29.399 21.204L53.1932 31.799C54.3111 32.5976 54.8105 34.0911 54.4093 35.4158Z" fill="#F8EFEB"/>
</svg>`;


const AdminProducts = ({navigation}) => {
    const [data, setData] = useState([])
    

    useEffect(() => {
        const dbRef = ref(db, 'products/');
        onValue(dbRef, snapshot => {
          let products = [];
          snapshot.forEach(childSnapshot => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            products.push({key: childKey, product: childData});
          });
          setData(products);
        });
      }, []);


      const deleteProduct = e => {
        Alert.alert(
          'Delete Product',
          'Are you sure?',
          [
            {
              text: 'Cancel',
              style: 'Cancel',
            },
            {
              text: 'Delete',
              onPress: () => {
                Alert.alert('Product Deleted');
                const dbRef2 = ref(db, 'products/' + e);
                remove(dbRef2).catch(err => console.log(err));
              },
            },
          ],
          {
            cancelable: true,
          },
        );
      };
    

    return (
      <ScrollView
        style={{
          backgroundColor: colors.background,
          paddingTop: '10%',
          paddingHorizontal: 15,
          flex: 1,
        }}>
        <Text style={Theme.eshlefWhite}>ESHELF</Text>
        <BorderedButton text={'Add a Product'} height={50} marginTop={'5%'} onPress={() =>  navigation.navigate("AddProduct") } />
        <View
          style={{
            flexWrap: 'wrap',
            width: '100%',
            flexDirection: 'row',
            paddingBottom: 80,
            marginTop: '5%',
          }}>
          {
            data.length > 0 ? (
            data.map((sel, key) => (
              <TouchableOpacity
                activeOpacity={0.9}
                key={key}
                style={
                  key % 4 === 0 && key !== 0
                    ? {width: '100%', marginVertical: 9.5}
                    : {width: '44%', margin: 9.5, overflow: 'hidden'}
                }>
                <View style={{width: '100%', position: 'relative'}}>
                  <TouchableOpacity activeOpacity={0.7} onPress={e => deleteProduct(sel.key)}>
                    <SvgXml
                      xml={cancelSvg}
                      style={{
                        position: 'absolute',
                        top: 10,
                        left: 10,
                        zIndex: 1000,
                      }}
                    />
                  </TouchableOpacity>
                  <Image
                    source={{uri : sel.product?.image}}
                    style={
                      key % 4 === 0 && key !== 0
                        ? {width: '100%', zIndex: -1}
                        : {width: '100%', height: 200, zIndex: -1}
                    }
                  />
                </View>
                <Text
                  style={{
                    color: colors.text,
                    fontFamily: 'GT-America-Regular',
                    fontSize: 12,
                    marginTop: 4,
                  }}>
                  {sel.product.name}
                </Text>
                <Text
                  style={{
                    color: colors.primary,
                    fontFamily: 'GT-America-Regular',
                    fontSize: 10,
                    marginTop: 4,
                  }}>
                  Rs. {sel.product.price}
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

  export default AdminProducts