import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';
import images from './Components/imageLists.json'

export default function App() {

    const [imageList, setImageList] = useState([{}])

    useEffect(() => {
        setImageList(images);
        // console.log('imageList = ', imageList[0].photo)
    }, [])


    return (
        <View style={styles.container}>
            <Text> ImageUploader </Text>
            <FlatList data={imageList} renderItem={itemData => (
                <View style={styles.imageContainer} >
                    {/* <Text> {itemData.item.id}</Text> */}
                    <Image source={{ uri: itemData.item.photo }} style={styles.ImageList} resizeMode="contain" />
                    <View style={styles.textDescription}>
                        <Text >{itemData.item.description}</Text>
                    </View>
                </View>
            )} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ImageList: {
        width: 350,
        height: 500,

    },
    textDescription: {
        justifyContent: "center",
        alignItems: "center"
    },
    imageContainer: {
        marginVertical: 100
    }
});


 // {
    //     "id": "",
    //     "photo": "",
    //     "description": ""
    // },