import { Text, View, Image, ScrollView, TouchableOpacity, Alert, } from 'react-native';
import React, { useState, useEffect } from 'react';
import Theme from '../Theme';
import { Field, Password } from '../components/Inputs';
import { Button, BorderedButton } from '../components/Button';
import { SettingLink } from '../components/SettingLink';
import { SvgXml } from 'react-native-svg';
import { push, ref } from 'firebase/database';
import { auth, db } from '../FirebaseConfig';
import { launchImageLibrary } from 'react-native-image-picker';
import { uploadImage } from '../components/UploadImage';
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from "firebase/storage";


const colors = Theme.colors;
const size = Theme.size;
const title1 = Theme.title1;
const text = Theme.text;


const AddProduct = ({ navigation }) => {
    const [imageUri, setImageUri] = useState(0);
    const [name, setName] = useState(0);
    const [price, setPrice] = useState(0);
    const [color, setColor] = useState(0);
    const [compose, setCompose] = useState(0);

    const handleProduct = async () => {

        const response = await fetch(imageUri);
        const blob = await response.blob();
        const fileName = imageUri.substring(imageUri.lastIndexOf('/') + 1);
        const storage = getStorage();
        const ImageRef = storageRef(storage, fileName);
        uploadBytes(ImageRef, blob).then(async (snapshot) => {
            alert('Image Uploaded');
            const downloadURL = await getDownloadURL(ImageRef);
            push(ref(db, '/products/'), {
                image: downloadURL,
                name: name,
                price: price,
                color: color,
                compose: compose
            })
            Alert.alert(
                "Product added",
            )
        });


        
        setName("")
        setPrice("")
        setColor("")
        setCompose("")
        setImageUri("")
    }

    let options = {
        saveToPhotos: true,
        mediaType: 'photo',
    };

    const openGallery = async () => {
        const result = await launchImageLibrary(options);
        setImageUri(result.assets[0].uri);
    };

    const backArrow = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 8H1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 15L1 8L8 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

    const borderOutline = `<svg width="350" height="243" viewBox="0 0 374 243" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1.5" y="1.5" width="371" height="240" rx="14.5" stroke="#D79E84" stroke-width="3" stroke-dasharray="6 6"/>
    <path d="M207 128.667V137.556C207 138.735 206.532 139.865 205.698 140.699C204.865 141.532 203.734 142 202.556 142H171.444C170.266 142 169.135 141.532 168.302 140.699C167.468 139.865 167 138.735 167 137.556V128.667" stroke="#D79E84" stroke-width="4.44444" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M198.111 113.111L187 102L175.889 113.111" stroke="#D79E84" stroke-width="4.44444" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M187 102V128.667" stroke="#D79E84" stroke-width="4.44444" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `;

    return (
        <ScrollView style={{ backgroundColor: colors.background, paddingTop: '10%', paddingHorizontal: 15, flex: 1, height: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '70%', }}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("AdminTabs")}>
                    <SvgXml xml={backArrow} />
                </TouchableOpacity>
                <Text style={Theme.title1}> Add Product</Text>
            </View>
            <View style={{ width: '60%' }}>
                <Text style={{ color: colors.primary, fontFamily: 'GT-America-Medium', fontSize: 18, marginTop: '12%', marginBottom: '10%', }}>
                    UPLOAD IMAGES
                </Text>
                <TouchableOpacity activeOpacity={0.7} onPress={openGallery}>
                    <SvgXml xml={borderOutline} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{ color: colors.tertiary, fontFamily: 'GT-America-Medium', fontSize: 20, marginTop: '10%', }}>
                    NAME
                </Text>
                <Field placeholder={'PRODUCT NAME HERE'} value={name} onChangeText={setName} />
            </View>
            <View>
                <Text style={{ color: colors.tertiary, fontFamily: 'GT-America-Medium', fontSize: 20, marginTop: '10%', }}>
                    PRICE
                </Text>
                <Field placeholder={'PRICE IN PKR'} value={price} onChangeText={setPrice} />
            </View>
            <View>
                <Text style={{ color: colors.tertiary, fontFamily: 'GT-America-Medium', fontSize: 20, marginTop: '10%', }}>
                    COLOR
                </Text>
                <Field placeholder={'COLOR OF PRODUCT'} value={color} onChangeText={setColor} />
            </View>
            <View>
                <Text style={{ color: colors.primary, fontFamily: 'GT-America-Medium', fontSize: 20, marginTop: '10%', }}>
                    COMPOSITION AND CARE
                </Text>
                <Field placeholder={'ENTER THE DETAILS OF THE PRODUCT'} value={compose} onChangeText={setCompose} />
            </View>
            {/* <View>
                <Text style={{color: colors.tertiary,fontFamily: 'GT-America-Trial',fontSize: 18,marginTop: '10%',}}>
                    SIZE AVAILABLE
                </Text>
                <View style={{ flexDirection: 'row', marginTop: '2%' }}>
                    {productSize.map( (s, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={e => setSize(index)}
                            style={size === index
                                    ? {padding: 2,width: 35,height: 35,borderRadius: 5,backgroundColor: colors.primary,borderColor: colors.primary,borderWidth: 1.24,justifyContent: 'center',alignItems: 'center',marginRight: 10,}
                                    : {padding: 2,width: 35,height: 35,borderRadius: 5,borderColor: colors.primary,borderWidth: 1.24,justifyContent: 'center',alignItems: 'center',marginRight: 10,}
                            }>
                            <Text style={size === index ? {color: colors.background,fontSize: 21, fontFamily: Theme.fonts.regular}: {color: colors.primary,fontSize: 21,fontFamily: Theme.fonts.regular,}}>
                                {s}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View> */}
            <View style={{ marginBottom: 80 }}>
                <Button text={'ADD PRDDUCT'} height={50} marginTop={'5%'} onPress={handleProduct} />
            </View>
        </ScrollView>
    );
};


export default AddProduct