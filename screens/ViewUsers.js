import {Text,View,Image,ScrollView,TouchableOpacity,Alert,} from 'react-native';
import React, {useState, useEffect} from 'react';
import Theme from '../Theme';
import {Field, Password} from '../components/Inputs';
import {Button, BorderedButton} from '../components/Button';
import {SettingLink} from '../components/SettingLink';
import {SvgXml} from 'react-native-svg';
import {getDatabase, ref, onValue, remove} from 'firebase/database';
import {auth, db} from '../FirebaseConfig';
const colors = Theme.colors;
const size = Theme.size;
const title1 = Theme.title1;
const text = Theme.text;


const ViewUsers = ({navigation}) => {
    const [data, setData] = useState([]);
    const deleteSVG = `<svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 5.25879H3H19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17 5.25865V19.2137C17 19.7425 16.7893 20.2495 16.4142 20.6234C16.0391 20.9973 15.5304 21.2073 15 21.2073H5C4.46957 21.2073 3.96086 20.9973 3.58579 20.6234C3.21071 20.2495 3 19.7425 3 19.2137V5.25865M6 5.25865V3.26507C6 2.73634 6.21071 2.22926 6.58579 1.85539C6.96086 1.48152 7.46957 1.27148 8 1.27148H12C12.5304 1.27148 13.0391 1.48152 13.4142 1.85539C13.7893 2.22926 14 2.73634 14 3.26507V5.25865" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 10.2422V16.2229" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 10.2422V16.2229" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
  
    useEffect(() => {
      const dbRef = ref(db, 'users/');
      onValue(dbRef, snapshot => {
        let users = [];
        snapshot.forEach(childSnapshot => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          users.push({key: childKey, user: childData});
        });
        setData(users);
      });
    }, []);
  
    const deleteUser = e => {
      Alert.alert(
        'Delete User',
        'Are you sure?',
        [
          {
            text: 'Cancel',
            style: 'Cancel',
          },
          {
            text: 'Delete',
            onPress: () => {
              Alert.alert('User Deleted');
              const dbRef2 = ref(db, 'users/' + e);
              remove(dbRef2).catch(err => console.log(err));
            },
          },
        ],
        {
          cancelable: true,
        },
      );
    };
  
    console.log(data);
    return (
      <ScrollView
        style={{backgroundColor: colors.background, height: '100%', flex: 1}}>
        <View>
          <Text
            style={{
              fontFamily: 'Bilagike',
              fontSize: 87,
              color: 'white',
              position: 'relative',
              top: 30,
              left: 25,
              zIndex: 1000,
              marginBottom: '10%',
            }}>
            ESHELF
          </Text>
        </View>
        {data.map(d => (
          <View
            style={{
              backgroundColor: '#EEEEEE',
              margin: 20,
              borderRadius: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 20,
              paddingHorizontal: 15,
            }}>
            <View>
              <Text
                style={{
                  fontSize: size.headline,
                  color: colors.background,
                  fontWeight: 'bold',
                }}>
                {d.user.name}
              </Text>
              <Text style={{color: colors.background}}>{d.user.email}</Text>
            </View>
            <TouchableOpacity
              key={d.key}
              onPress={e => deleteUser(d.key)}
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <SvgXml xml={deleteSVG} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    );
  };

  export default ViewUsers