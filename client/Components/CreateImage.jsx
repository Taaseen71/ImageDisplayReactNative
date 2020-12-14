import React from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TextInput, Linking, TouchableOpacity } from 'react-native';
import { NativeRouter, Route, Link, Switch } from "react-router-native";
import axios from 'axios'


export default function CreateImage({ urlInput, seturlInput, urlDescription, seturlDescription, handleAdd, newImage, setnewImage }) {



    const postData = async () => {
        const newImage = ({
            photo: urlInput,
            description: urlDescription,
            date: new Date()
        })

        console.log("newImage : ", newImage)
        axios.post('http://localhost:5000/images/add', newImage)
            .then(res => alert(res.data))

        seturlInput("");
        seturlDescription("");
    }





    return (
        <View style={styles.textDescription}>
            {/* <Button title="Home" onPress={() => history.push("/")} /> */}
            <Text > ImageUploader </Text>
            <TextInput placeholder="Enter New Image URL" value={urlInput} onChangeText={e => seturlInput(e)} />
            <TextInput placeholder="Description for this Photo" value={urlDescription} onChangeText={e => seturlDescription(e)} />
            <Button title="Add"
                // onPress={handleAdd}
                onPress={postData}
            />
            <Link component={TouchableOpacity} style={styles.textDescription} to="/">
                <Text style={styles.nativeLink}>Back to Home</Text>
                {/* <Button title="Home" onPress={() => Linking.openURL('/')} /> */}
            </Link>
        </View>
    )
}



const styles = StyleSheet.create({

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
    },
    header: {
        backgroundColor: "black"
    },
    nativeLink: {
        color: "#0071E4",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        fontSize: 18,
        fontWeight: "600"
    }
});