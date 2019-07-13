import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,
ScrollView } from 'react-native';
import { Container, Content, Item, Input, Form
, Textarea } from 'native-base';
import Icon  from 'react-native-vector-icons/FontAwesome5';

export default class SearchTab extends Component {

    render() {
        return (
            <Container style={style.container}>
            <Content padder>
              <ScrollView>
                  <Item>
                      
                  </Item>
              </ScrollView>
            </Content>
          </Container>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    }
});