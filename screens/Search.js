import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {Field} from '../components/Inputs';
import Theme from '../Theme';

const colors = Theme.colors;
const size = Theme.size;
const title1 = Theme.title1;
const text = Theme.text;

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [cross, setCross] = useState(false);

  const crossSVG = `<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.11865 2.88135L2.88135 4.11865L9.2627 10.5L2.88135 16.8813L4.11865 18.1187L10.5 11.7373L16.8813 18.1187L18.1187 16.8813L11.7373 10.5L18.1187 4.11865L16.8813 2.88135L10.5 9.2627L4.11865 2.88135Z" fill="#F8EFEB"/>
  </svg>
  `;

  return (
    <View
      style={{
        backgroundColor: colors.background,
        paddingTop: '6%',
        paddingHorizontal: 34,
        flex: 1,
        height: '100%',
        position : 'relative'
      }}>
      <Text style={Theme.eshlefWhite}>ESHELF</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '60%',
          marginTop: '8%',
        }}>
        <Text
          style={{
            fontSize: size.headline,
            fontFamily: 'GT-America-Medium',
            color: '#F8EFEB',
          }}>
          WOMAN
        </Text>
        <Text
          style={{
            fontSize: size.headline,
            fontFamily: 'GT-America-Medium',
            color: '#AAAAAA',
          }}>
          MAN
        </Text>
        <Text
          style={{
            fontSize: size.headline,
            fontFamily: 'GT-America-Medium',
            color: '#AAAAAA',
          }}>
          KIDS
        </Text>
      </View>
      <View>
        <SvgXml
          xml={crossSVG}
          style={{
            height: 35,
            width: 60,
            borderRadius: 8,
            position: 'absolute',
            left: '93%',
            top: 35,
            opacity: 0.7,
          }}
          // onPress={setSearchValue('')}
        />
      </View>
      <Field
        placeholder={'ENTER SEARCH ITEMS'}
        marginTop={'7%'}
        onChangeText={setSearchValue}
        value={searchValue}
      />

      <View style={{marginTop: '20%'}}>
        <Text
          style={{
            fontSize: size.headline,
            fontFamily: 'GT-America-Medium',
            color: colors.primary,
          }}>
          RECENTS
        </Text>

        <Text
          style={{
            fontSize: size.headline,
            fontFamily: 'Work Sans-Medium',
            color: '#F8EFEB',
            marginTop: '3%',
          }}>
          JACKETS
        </Text>
      </View>

      <View>
        <View style={{marginTop: '13%'}}>
          <Text
            style={{
              fontSize: size.headline,
              fontFamily: 'GT-America-Medium',
              color: colors.primary,
            }}>
            TRENDS
          </Text>

          <Text
            style={{
              fontSize: size.headline,
              fontFamily: 'Work Sans-Medium',
              color: '#F8EFEB',
              marginTop: '3%',
            }}>
            TURTLE SHIRTS
          </Text>
          <Text
            style={{
              fontSize: size.headline,
              fontFamily: 'Work Sans-Medium',
              color: '#F8EFEB',
              marginTop: '3%',
            }}>
            HIGH NECK
          </Text>
          <Text
            style={{
              fontSize: size.headline,
              fontFamily: 'Work Sans-Medium',
              color: '#F8EFEB',
              marginTop: '3%',
            }}>
            COAT
          </Text>
        </View>
      </View>
    </View>
  );
};

const EmptyResult = () => {
  const hangerSVG = `<svg width="58" height="40" viewBox="0 0 58 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M54.5677 29.4893C54.5052 29.4478 54.3435 29.4119 54.2764 29.3819L29.9689 18.6377V15.1468C34.5926 14.5908 36.8755 11.5404 36.8755 7.61851C36.8755 3.27582 33.8193 0 29.7019 0C25.3789 0 21.7516 3.56363 21.7516 7.78266C21.7516 8.50854 22.3528 9.09806 23.0786 9.09806C23.2948 9.09806 23.4959 9.03339 23.675 8.94201C24.1004 8.72346 24.4032 8.2935 24.4032 7.78266C24.4032 5.03847 26.9023 2.63081 29.7481 2.63081C32.4078 2.63081 34.3393 4.72878 34.3393 7.61851C34.3393 10.4619 32.0413 12.6062 28.9088 12.6062C28.183 12.6062 27.657 13.1957 27.657 13.9216V16.4923V19.0735C27.657 19.0989 27.6061 19.1198 27.6086 19.1451L4.3045 30.1599C0.868046 31.3979 -0.308707 34.2147 0.0669839 36.3647C0.45307 38.5759 2.3279 40 4.75647 40H51.0422C53.9169 40 56.172 38.5124 56.9269 36.018C57.6724 33.5606 56.7015 30.9112 54.5677 29.4893ZM54.4093 35.4158C53.992 36.7971 52.7645 37.6883 51.0433 37.6883H4.75647C3.58092 37.6883 2.80984 37.0363 2.64109 36.0724C2.44926 34.9719 3.15664 33.4092 5.27999 32.637L29.399 21.204L53.1932 31.799C54.3111 32.5976 54.8105 34.0911 54.4093 35.4158Z" fill="#F8EFEB"/>
  </svg>
  `;
  return (
    <View
      style={{
        backgroundColor: colors.background,
        height: '100%',
      }}>
      <View
        style={{
          paddingTop: '6%',
          paddingHorizontal: 34,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SvgXml xml={hangerSVG} />
        <Text
          style={{
            fontSize: size.headline,
            fontFamily: 'GT-America-Medium',
            color: '#F8EFEB',
            marginTop: '9%',
          }}>
          NO PRODUCTS FOUND
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: '#F8EFEB',
            width: '50%',
            textAlign: 'center',
            opacity: 0.5,
          }}>
          NO, RESULT FOUND FOR "TURTLE SHIRTE BLUE COLOR"
        </Text>
      </View>
    </View>
  );
};

export default Search;
