import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    FlatList,       //!Flatlist encloses all the components in a scrollable map
    TextInput,
    TouchableOpacity //!TouchableOpacity changes link-taps from black to opaque
} from 'react-native';
import { NativeRouter, Route, Link, Switch } from "react-router-native";


export default function Home({ imageList, setImageList, urlInput, seturlInput, urlDescription, seturlDescription, backendPhotos }) {
    return (
        <View >
            {/* <Button title="Upload" onPress={() => history.push("/createImage")} /> */}
            <View style={styles.textDescription}>
                <View style={styles.sidebyside}>
                    <Link component={TouchableOpacity} style={styles.header} to="/createImage">
                        <Text style={styles.nativeLink}>Upload</Text>
                    </Link>

                </View>
            </View>

            <FlatList
                // horizontal //?Stacks Horizontally
                inverted   //?Stacks Inverted but upsidedown. 
                keyExtractor={(item, index) => index.toString()}
                data={imageList}
                renderItem={({ item }) => (
                    <View style={styles.imageContainer} >
                        <Image source={{ uri: item.photo }} style={styles.ImageList} resizeMode="contain" />
                        <View style={styles.textDescription}>
                            <Text >{item.description}</Text>
                            {/* <Text> {item._id}</Text> */}
                        </View>
                        <View style={styles.textDescription}>
                            <View style={styles.sidebyside}>
                                <Link component={TouchableOpacity} style={styles.header} to="/editImage">
                                    <Text style={styles.nativeLink}>Edit</Text>
                                </Link>
                                <Link component={TouchableOpacity} style={styles.header} to="/editImage">
                                    <Text style={styles.nativeLink}>Delete</Text>
                                </Link>
                            </View>
                        </View>
                    </View>
                )} />
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
    sidebyside: {
        flexDirection: "row"
    },
    nativeLink: {
        color: "#0071E4",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        fontSize: 18,
        fontWeight: "600"
    },
    header: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        // backgroundColor: "#E0E0E0"
    }

});


/*
renderItem={(itemData) => (
                    <View style={styles.imageContainer} key={itemData.item._id}>
                        <Image source={{ uri: itemData.item.photo }} style={styles.ImageList} resizeMode="contain" />
                        <View style={styles.textDescription}>
                            <Text >{itemData.item.description}</Text>

                            </View>
                            <View style={styles.textDescription}>
                                <View style={styles.sidebyside}>
                                    <Link component={TouchableOpacity} style={styles.header} to="/editImage">
                                        <Text style={styles.nativeLink}>Edit</Text>
                                    </Link>
                                    <Link component={TouchableOpacity} style={styles.header} to="/editImage">
                                        <Text style={styles.nativeLink}>Delete</Text>
                                    </Link>
                                </View>
                            </View>
                        </View>
                    )} />
*/