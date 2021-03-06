import React from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TextInput, Linking, TouchableOpacity } from 'react-native';
import { NativeRouter, Route, Link, Switch } from "react-router-native";

export default function EditImage({ imageList, setImageList, urlInput, seturlInput, urlDescription, seturlDescription, handleAdd, history }) {
    return (
        <View style={styles.textDescription}>
            {/* <Button title="Home" onPress={() => history.push("/")} /> */}
            <Text style={{ padding: 30 }}> Unfortunately, this page hasn't been updated yet. While the dev works on fixing this issue, Please take a look at the rest of the app</Text>
            {/* <TextInput placeholder="Enter New Image URL" value={urlInput} onChangeText={e => seturlInput(e)} />
            <TextInput placeholder="New Description" value={urlDescription} onChangeText={e => seturlDescription(e)} />
            <Button title="Add" onPress={handleAdd} /> */}
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
})
