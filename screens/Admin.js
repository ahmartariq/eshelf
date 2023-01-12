import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Theme from '../Theme'
import { Field, Password } from '../components/Inputs';
import { Button, BorderedButton } from '../components/Button';
import {SettingLink} from '../components/SettingLink';
import {SvgXml} from 'react-native-svg';
import UsersField from '../components/UsersField';
const colors = Theme.colors
const size = Theme.size
const title1 = Theme.title1
const text = Theme.text

const shapeSVG = `<svg width="430" height="212" viewBox="0 0 430 212" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H430L440.154 56.4948C456.848 149.376 368.567 226.566 278.745 197.628L218.873 178.339C184.104 167.138 146.069 173.335 116.655 194.995C80.7824 221.41 30.7409 216.401 0.816042 183.4L0 182.5V0Z" fill="${colors.primary}"/>
</svg>
`;
const usersSVG = `<svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.0892 44.8786C23.0892 44.8786 19.8327 44.8786 19.8327 41.673C19.8327 38.4674 23.0892 28.8506 36.1152 28.8506C49.1412 28.8506 52.3977 38.4674 52.3977 41.673C52.3977 44.8786 49.1412 44.8786 49.1412 44.8786H23.0892Z" fill="#F8EFEB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36.1152 25.6448C41.5107 25.6448 45.8847 21.3392 45.8847 16.028C45.8847 10.7167 41.5107 6.41113 36.1152 6.41113C30.7196 6.41113 26.3457 10.7167 26.3457 16.028C26.3457 21.3392 30.7196 25.6448 36.1152 25.6448Z" fill="#F8EFEB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.2806 44.8786C16.8222 43.9681 16.5762 42.8887 16.5762 41.6735C16.5762 37.3283 18.7877 32.8595 22.8811 29.7482C21.0904 29.1843 19.0028 28.8506 16.5762 28.8506C3.55026 28.8506 0.293762 38.4674 0.293762 41.673C0.293762 44.8786 3.55026 44.8786 3.55026 44.8786H17.2806Z" fill="#F8EFEB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.948 25.6452C19.4443 25.6452 23.0892 22.0572 23.0892 17.6312C23.0892 13.2052 19.4443 9.61719 14.948 9.61719C10.4517 9.61719 6.80676 13.2052 6.80676 17.6312C6.80676 22.0572 10.4517 25.6452 14.948 25.6452Z" fill="#F8EFEB"/>
</svg>
`
const ordersSVG = `<svg width="35" height="38" viewBox="0 0 35 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.61921 2L2.60168 8.69004V32.1052C2.60168 32.9923 2.95411 33.8431 3.58142 34.4705C4.20873 35.0978 5.05955 35.4502 5.9467 35.4502H29.3618C30.249 35.4502 31.0998 35.0978 31.7271 34.4705C32.3544 33.8431 32.7069 32.9923 32.7069 32.1052V8.69004L27.6893 2H7.61921Z" stroke="#F8EFEB" stroke-width="3.85964" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.60168 8.69043H32.7069" stroke="#F8EFEB" stroke-width="3.85964" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.3443 15.3809C24.3443 17.1552 23.6395 18.8568 22.3848 20.1114C21.1302 21.3661 19.4286 22.0709 17.6543 22.0709C15.88 22.0709 14.1783 21.3661 12.9237 20.1114C11.6691 18.8568 10.9642 17.1552 10.9642 15.3809" stroke="#F8EFEB" stroke-width="3.85964" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
const cashSVG = `<svg width="49" height="34" viewBox="0 0 49 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M38.3779 0H10.5358C5.03706 0 0.562561 4.47528 0.562561 9.97324V23.2721C0.562561 28.7696 5.03651 33.2453 10.5358 33.2453H38.3779C43.8766 33.2453 48.3511 28.7701 48.3511 23.2721V9.97324C48.3511 4.47573 43.8767 0.00044498 38.3779 0.00044498V0ZM36.7149 29.2757C36.7149 29.777 36.7849 30.2692 36.8957 30.7519H12.0166C12.1288 30.2692 12.1988 29.7784 12.1988 29.2757C12.1988 25.6665 9.2631 22.7308 5.65389 22.7308C4.74649 22.7308 3.86999 22.9352 3.05734 23.2882C3.05734 23.2808 3.05604 23.2756 3.05604 23.2708V9.97308C3.05604 9.9683 3.05734 9.96308 3.05734 9.95569C3.86996 10.3083 4.74652 10.5105 5.65389 10.5105C9.2631 10.5105 12.1988 7.57612 12.1988 3.96558C12.1988 3.46687 12.1288 2.9747 12.0166 2.49211H36.8946C36.7838 2.97472 36.7138 3.4656 36.7138 3.96558C36.7138 7.57568 39.6481 10.5105 43.2587 10.5105C44.1648 10.5105 45.0413 10.3087 45.8552 9.95569C45.8552 9.96308 45.8565 9.9683 45.8565 9.97308V23.2719C45.8565 23.2767 45.8552 23.2819 45.8552 23.2893C45.0413 22.9367 44.1647 22.7319 43.2587 22.7319C39.6508 22.7311 36.7151 25.6681 36.7151 29.2759L36.7149 29.2757ZM45.395 7.40853C44.758 7.80506 44.021 8.01679 43.2592 8.01679C41.0253 8.01679 39.2079 6.20028 39.2079 3.96548C39.2079 3.49069 39.2988 3.02285 39.4596 2.58072C42.2049 2.9829 44.4654 4.87418 45.3949 7.40862L45.395 7.40853ZM9.45202 2.58019C9.61289 3.0228 9.70506 3.4902 9.70506 3.96494C9.70506 6.20019 7.88766 8.01626 5.65374 8.01626C4.89199 8.01626 4.15545 7.80452 3.518 7.40799C4.44715 4.874 6.70848 2.98269 9.45195 2.5801L9.45202 2.58019ZM3.5184 25.8331C4.15538 25.4379 4.89192 25.2236 5.6537 25.2236C7.88761 25.2236 9.70502 27.0423 9.70502 29.2749C9.70502 29.7523 9.61284 30.2197 9.45197 30.6623C6.7085 30.261 4.4471 28.3696 3.51836 25.8331L3.5184 25.8331ZM39.4602 30.6636C39.2994 30.221 39.2085 29.7536 39.2085 29.2762C39.2085 27.0435 41.0259 25.2248 43.2598 25.2248C44.0216 25.2248 44.7581 25.4392 45.3955 25.8357C44.4664 28.3697 42.2051 30.261 39.4603 30.6636L39.4602 30.6636Z" fill="#F8EFEB"/>
<path d="M24.0161 9.7928C25.5605 9.72411 27.3122 11.4045 27.8431 12.0616C28.2732 12.6003 29.0597 12.685 29.5944 12.2559C30.1331 11.8272 30.2201 11.0429 29.7888 10.5054C29.5531 10.2089 27.6623 7.96105 25.1926 7.41754L25.1931 5.21624C25.1931 4.52667 24.6344 3.96973 23.9465 3.96973C23.257 3.96973 22.7 4.52713 22.7 5.21624V7.49279C21.6144 7.78932 20.6904 8.40541 20.036 9.29672C19.1534 10.4998 18.8769 12.0894 19.2769 13.6598C19.9386 16.2603 21.9669 17.0033 23.1787 17.446C23.4418 17.5434 23.6874 17.6282 23.8944 17.7325C24.18 17.876 24.5166 18.003 24.8779 18.1364C26.1257 18.5917 26.9049 18.9569 27.2192 20.1934C27.4388 21.0512 27.3127 21.8591 26.8666 22.4674C26.4366 23.0521 25.7383 23.4 24.8996 23.4461C23.3539 23.5282 21.6047 21.8365 21.0712 21.1748C20.6412 20.6361 19.8546 20.5513 19.3207 20.9804C18.782 21.4117 18.6963 22.1961 19.1263 22.733C19.3294 22.9861 20.7368 24.6791 22.7016 25.4992V28.0289C22.7016 28.7158 23.259 29.2754 23.9481 29.2754C24.6364 29.2754 25.1946 28.7158 25.1946 28.0289V25.911C26.7216 25.7863 28.0282 25.1006 28.8773 23.944C29.7612 22.7409 30.0378 21.1493 29.6365 19.5783C28.9756 16.9804 26.9473 16.2373 25.736 15.7948C25.4729 15.6974 25.2273 15.6126 25.019 15.5082C24.7333 15.3648 24.3981 15.2378 24.0368 15.1043C22.7889 14.6491 22.0085 14.2839 21.6946 13.0474C21.475 12.1882 21.6011 11.3817 22.0472 10.7734C22.4763 10.1856 23.1767 9.83775 24.016 9.79296L24.0161 9.7928Z" fill="#F8EFEB"/>
</svg>
`
const productsSVG = `<svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.7866 6.19913L21.179 0.0960087C20.8375 -0.0320029 20.496 -0.0320029 20.1546 0.0960087L1.54695 6.19913C0.864029 6.41259 0.394562 7.05262 0.394562 7.77815V32.2327C0.394562 32.9582 0.864037 33.5986 1.54695 33.8117L20.1546 39.9146C20.3252 39.9571 20.4961 40 20.6667 40C20.8372 40 21.0081 39.9574 21.1787 39.9146L39.7864 33.8117C40.4693 33.5983 40.9388 32.9583 40.9388 32.2327V7.77815C40.9388 7.05266 40.4693 6.4126 39.7864 6.19913H39.7866ZM20.6668 3.3823L33.9824 7.77815L20.6668 12.1314L16.5271 10.7655L19.429 9.69859C20.2825 9.3997 20.7094 8.41817 20.4105 7.56468C20.1116 6.7112 19.1301 6.28426 18.2766 6.58316L11.448 9.05849L7.35072 7.69264L20.6668 3.3823ZM3.68093 10.04L9.69862 12.0034V25.575C9.69862 26.4714 10.4241 27.2395 11.3631 27.2395C12.302 27.2395 13.0275 26.514 13.0275 25.575V13.113L19.0452 15.0763V36.0313L3.68108 30.9951L3.68093 10.04ZM31.6351 33.0009V24.4225C31.6351 23.5262 30.9096 22.7581 29.9707 22.7581C29.0743 22.7581 28.3062 23.4836 28.3062 24.4225L28.3059 34.0678L22.2882 36.0312L22.2885 15.0762L37.61 10.0403V30.9953L31.6351 33.0009Z" fill="#F8EFEB"/>
</svg>
`

export default function AdminProfile() {
  return (
    <View style={{backgroundColor: colors.background, height: '100%', flex: 1}}>
      <SvgXml xml={shapeSVG} />
      <Text
          style={{
            fontFamily: 'Bilagike',
            fontSize: 87,
            color: 'white',
            position: 'absolute',
            top: 70,
            left: 25,
            zIndex: 1000,
          }}>
          ESHELF
        </Text>
    <View style={{ backgroundColor: colors.background , paddingTop: '10%', paddingHorizontal: 35 , flex: 1}}>
    <Text style = {{alignSelf: 'center', fontSize: size.headline}}>ADMIN PROFILE</Text>
    <Text
        style={{
          fontSize: size.headline,
          color: colors.gray,
          fontWeight: 'bold',
          marginTop: 20,
        }}>
        AHMAR TARIQ
      </Text>
      <Text style={{color:colors.gray, marginBottom:36 }}>AHMARPRESIDENT@HOTMAIL.COM </Text>
        <SettingLink textHeading={'ACCOUNT'} />
      <BorderedButton text={"LOGOUT"} height={50} marginTop={"25%"} />
    </View>
    </View>
  )
}

export const Users = ()=> {
    return (
        <ScrollView style={{backgroundColor: colors.background, height: '100%', flex: 1}}>
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
              marginBottom: "10%"
              }}>
              ESHELF
            </Text>
          </View>
          <View style = {{marginBottom: "-5%"}}>
            <UsersField Name = 'AHMAR TARIQ' Email = 'AHMARPRESIDENT@HOTMAIL.COM' PhoneNumber = '03125077808' />
          </View>
          <View style = {{marginBottom: "-5%"}}>
            <UsersField Name = 'SHAHZAIB KHURSHEED' Email = 'shahzaib@yahoo.com' PhoneNumber = '03125077808' />
          </View>
          <View style = {{marginBottom: "-5%"}}>
            <UsersField Name = 'SOBAN FAYYAZ' Email = 'jaanjee@hotlook.com' PhoneNumber = '03125077808' />
          </View>
          <View style = {{marginBottom: "-5%"}}>
            <UsersField Name = 'SHEHRYAR KHAN' Email = 'shehryar@yahoo.com' PhoneNumber = '03125077808' />
          </View>
          <View style = {{marginBottom: "-5%"}}>
            <UsersField Name = 'AHMAR TARIQ' Email = 'AHMARPRESIDENT@HOTMAIL.COM' PhoneNumber = '03125077808' />
          </View>
        </ScrollView>
    )
}

export const Dashboard = () => {
  return (
    <View >
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
          marginBottom: "10%"
          }}>
          ESHELF
        </Text>
      </View>
      <View style = {{flexDirection: 'column', justifyContent: 'space-between'}}>
        <View style = {{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style = {{backgroundColor: 'red', margin: '5%', marginposition: 'absolute', width: 150.38, height: 180.89, left: 21.52, top: 194, background: "linear-gradient(214deg, #3C3C3C 0%, #272727 72.03%)",
            boxShadow: "-14.3999 21.3488 51.5026 rgba(10, 10, 10, 0.3695), inset 5.66398 -8.39719 10.1288 #242424, inset -5.66398 8.39719 10.1288 #3F3F3F",
            borderRadius: 13.026}}>
            <SvgXml xml={usersSVG}/>
          </View>
          <View style = {{backgroundColor: 'blue', margin: '5%', marginposition: 'absolute', width: 150.38, height: 180.89, left: 21.52, top: 194, background: "linear-gradient(214deg, #3C3C3C 0%, #272727 72.03%)",
            boxShadow: "-14.3999 21.3488 51.5026 rgba(10, 10, 10, 0.3695), inset 5.66398 -8.39719 10.1288 #242424, inset -5.66398 8.39719 10.1288 #3F3F3F",
            borderRadius: 13.026}}>
            <SvgXml xml = {ordersSVG}/>
          </View>
        </View>
        <View style = {{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style = {{backgroundColor: 'yellow', margin: '5%', marginposition: 'absolute', width: 150.38, height: 180.89, left: 21.52, top: 194, background: "linear-gradient(214deg, #3C3C3C 0%, #272727 72.03%)",
            boxShadow: "-14.3999 21.3488 51.5026 rgba(10, 10, 10, 0.3695), inset 5.66398 -8.39719 10.1288 #242424, inset -5.66398 8.39719 10.1288 #3F3F3F",
            borderRadius: 13.026}}>
            <SvgXml xml={productsSVG}/>
          </View>
          <View style = {{backgroundColor: 'purple', margin: '5%', marginposition: 'absolute', width: 150.38, height: 180.89, left: 21.52, top: 194, background: "linear-gradient(214deg, #3C3C3C 0%, #272727 72.03%)",
            boxShadow: "-14.3999 21.3488 51.5026 rgba(10, 10, 10, 0.3695), inset 5.66398 -8.39719 10.1288 #242424, inset -5.66398 8.39719 10.1288 #3F3F3F",
            borderRadius: 13.026}}>
            <SvgXml xml={cashSVG}/>
          </View>
        </View>
      </View>
      
    </View>
  )
}


const styles = StyleSheet.create({

})