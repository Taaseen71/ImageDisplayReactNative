import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TextInput } from 'react-native';
import { NativeRouter, Route, Link, Switch } from "react-router-native";
// import Home from "./Components/Home";
import CreateImage from "./Components/CreateImage"
import EditImage from "./Components/EditImage"
import images from './Components/imageLists.json'
import { v4 as uuidV4 } from 'uuid'
// import { save } from 'save-file'
const Home = lazy(() => import('./Components/Home'))


import axios from 'axios';


export default function App() {

    const [imageList, setImageList] = useState([{}])
    const [urlInput, seturlInput] = useState("")
    const [urlDescription, seturlDescription] = useState("")
    const [urlDate, seturlDate] = useState("")
    const [newImage, setnewImage] = useState({
        photo: "",
        description: "",
        date: ""
    })



    useEffect(() => {
        // setImageList(images);
        getData()
        // console.log('imageList = ', imageList[0].photo)
    }, [imageList])

    const getData = () => {
        // axios.get('http://localhost:5000/images')
        axios.get('https://photosbysaad.herokuapp.com/images')
            .then(function (res) {
                // console.log(res.data);
                setImageList(res.data)
            })
        return imageList
    }




    const handleAdd = () => {
        const currentImage = urlInput
        const description = urlDescription
        setImageList([...imageList, {
            // id: uuidV4(),
            photo: currentImage,
            description: description
        }])
        seturlInput("");
        seturlDescription("");
        let images = JSON.stringify(imageList);
        // alert(images);  1

    }

    return (
        <NativeRouter >
            <View style={styles.container}>
                <Text style={styles.introHeader}> Photos By Saad </Text>
                <Text style={styles.introHeader}> #ohSaadPhotography </Text>
                <Switch>
                    <Route exact path="/createImage">
                        <CreateImage imageList={imageList} setImageList={setImageList} urlInput={urlInput} seturlInput={seturlInput} urlDescription={urlDescription} seturlDescription={seturlDescription} handleAdd={handleAdd} newImage={newImage} setnewImage={setnewImage} />
                    </Route>

                    <Route exact path="/" >
                        <Suspense fallback={<Text> Loading.... </Text>}>
                            <Home imageList={imageList} setImageList={setImageList} urlInput={urlInput} seturlInput={seturlInput} urlDescription={urlDescription} seturlDescription={seturlDescription} />
                        </Suspense>
                    </Route>
                    <Route exact path="/editImage"><EditImage /></Route>
                </Switch>
            </View>
        </NativeRouter>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        backgroundColor: "#E0E0E0",
        // backgroundColor: "#DB7734",
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
    },
    introHeader: {
        fontSize: 20,
        // color: "#7634DB",
        fontWeight: "bold",
    }
});


