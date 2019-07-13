import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {
  Container, Content, Card, CardItem, Body,
  Button, Input, Item, Text, Textarea, Form
} from 'native-base';
import Icon  from 'react-native-vector-icons/FontAwesome5';

export default class CreateAlbum extends Component {

  static navigationOptions = {
    headerTitle: (
      <Image source={require('../../../assets/OnlyLogo.png')}
             style = {{ width: 75, height: 35, marginLeft:15 }}/>
    ),
    headerRight: <TouchableOpacity><Text>Done</Text></TouchableOpacity>,
    headerTitleStyle: {
        flex: 1,
        paddingLeft:20,
        //android title 가운데 정렬
    },
  }

  render() {
    return (
      <Container style={style.container}>
        <Content padder>
          <Item>
            <Icon active name='highlighter' />
            <Input placeholder='앨범 제목' />
          </Item>
          <Item>
            <Icon active name='hashtag' />
            <Input placeholder=' hashtag' />
          </Item>
          <Item>
          <TouchableOpacity style={style.squarebtn}>
            <Icon style = {[style.txtinsqr, {fontSize:18}]} name='plus-circle' />
            <Text style = {style.txtinsqr}>사진 추가</Text>
            <Text style = {style.txtinsqr}>0/10</Text>
          </TouchableOpacity>
          </Item>
          <Form>
            <Textarea rowSpan={6} placeholder="이곳에 당신의 여행을 기록해주세요!" />
          </Form>
        </Content>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',    
  },
  squarebtn: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#8C8C8C',
    borderWidth:3,
    borderRadius:20,
    margin:10
  },
  txtinsqr: {
    color: '#8C8C8C',

  }
});