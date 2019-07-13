import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

export default class ProfileTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='person' style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <View style={style.container}>
                <TouchableOpacity style={style.squarebtn}>
                    <Icon name='ios-add-circle-outline' />
                    <Text>Hello</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    squarebtn: {
      flex: 1, 
      borderColor:'black',
      marginLeft: 5, 
      marginRight: 5, 
      borderRadius: 50,
      borderWidth:1
    }
});