import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, CameraRoll, ScrollView, Image } from 'react-native';
import { Icon, Button } from 'native-base';
import ImagePicker from 'react-native-image-picker';

// const options = {
//     title: 'Select Avatar',
//     takePhotoButtonTitle: 'Take Photo',
//     chooseFromLibraryButtonTitle: 'asdf',
//   };


export default class HomeTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: null,
        }
    }

    handleChoosePhoto = () => {
        const options = {
            noData: true
        };
        ImagePicker.launchImageLibrary(options, (response) => {
            console.log("response", response);
            if (response.uri) {
                this.setState({photo:response})
            }
          });
    };

    render() {
        const { photo } = this.state;
        return (
            <View style = {{flex: 1, alignItems:"center", justifyContent:"center"}}>
                {photo && (
                    <Image
                        source = {{uri: photo.uri}}
                        style={{ width: 300, height: 300 }}/>
                )}
                <Button onPress={this.handleChoosePhoto}>
                    <Text style = {{textAlign:"center"}}>앨범 접근</Text>
                </Button>
                <Button onPress={() => this.props.navigation.navigate('AddMediaTab')}>
                    <Text> 화면 전환</Text>
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    scrollview: {
        width: "80%"
    },
    scrollviewContainer: {
        height: "60%",
        width: "100%",
        alignItems: "center"
    }

});