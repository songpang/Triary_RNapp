import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { FlatGrid } from 'react-native-super-grid';

export default class LikesTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='heart' style={{ color: tintColor }} />
        )
    }

    _handleClickAction = () => {
        alert("Clicked");
    }

    render() {
        const items = [
            { name: 'FirstAlbum', code: '#1abc9c' }, { name: 'EMERALD', code: '#2ecc71' },
            { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
            { name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' },
            { name: 'NEPHRITIS', code: '#27ae60' }, { name: 'BELIZE HOLE', code: '#2980b9' },
            { name: 'WISTERIA', code: '#8e44ad' }, { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
            { name: 'SUN FLOWER', code: '#f1c40f' },
            //    { name: 'CARROT', code: '#e67e22' },
            //   { name: 'ALIZARIN', code: '#e74c3c' }, { name: 'CLOUDS', code: '#ecf0f1' },
            //   { name: 'CONCRETE', code: '#95a5a6' }, { name: 'ORANGE', code: '#f39c12' },
            //   { name: 'PUMPKIN', code: '#d35400' }, { name: 'POMEGRANATE', code: '#c0392b' },
            //   { name: 'SILVER', code: '#bdc3c7' }, { name: 'ASBESTOS', code: '#7f8c8d' },
        ];

        return (
            <FlatGrid
                itemDimension={130}
                items={items}
                style={styles.gridView}
                // staticDimension={100}
                // fixed
                // spacing={20}
                renderItem={({ item, index }) => (
                    <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                        <TouchableOpacity onPress={() => this._handleClickAction()}>
                            <ImageBackground source={require('../../test_img.jpg')}
                                style={[{ width: '100%', height: '100%' }]}
                                blurRadius={2}
                                imageStyle={{ borderRadius: 5 }}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemCode}>{item.code}</Text>
                                <Text style={styles.itemCode}>첫 앨범</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                )}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    gridView: {
        marginTop: 10,
        flex: 1,
    },
    itemContainer: {
        borderRadius: 5,
        padding: 2,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    imageshot: {

    }
});