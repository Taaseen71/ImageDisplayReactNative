import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TextInput } from 'react-native';
import images from './Components/imageLists.json'
import { v4 as uuidV4 } from 'uuid'
// import { save } from 'save-file'
var fs = require('fs');



export default function App() {

    const [imageList, setImageList] = useState([{}])
    const [urlInput, seturlInput] = useState("")
    const [urlDescription, seturlDescription] = useState("")




    useEffect(() => {
        setImageList(images);
        // console.log('imageList = ', imageList[0].photo)
    }, [])


    const handleAdd = () => {
        const newImage = urlInput
        const description = urlDescription
        setImageList([...imageList, { id: uuidV4(), photo: newImage, description: description }])
        seturlInput("");
        seturlDescription("");
        let images = JSON.stringify(imageList);
        // alert(images);  1

    }


    return (
        <View style={styles.container}>
            <Text> ImageUploader </Text>
            <TextInput placeholder="Enter New Image URL" value={urlInput} onChangeText={e => seturlInput(e)} />
            <TextInput placeholder="Description for this Photo" value={urlDescription} onChangeText={e => seturlDescription(e)} />
            <Button title="Add" onPress={handleAdd} />
            <FlatList data={imageList} renderItem={itemData => (
                <View style={styles.imageContainer} >
                    {/* <Text> {itemData.item.id}</Text> */}
                    <Image source={{ uri: itemData.item.photo }} style={styles.ImageList} resizeMode="contain" />
                    <View style={styles.textDescription}>
                        <Text >{itemData.item.description}</Text>
                        <Text> {itemData.item.id}</Text>
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