import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { Icon } from 'native-base';
import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation'; 
import HomeTab from './AppTabNavigator/HomT'
import SearchTab from './AppTabNavigator/SearchTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'

const AppTabNavigator = createMaterialTopTabNavigator({
    A: { screen: HomeTab,
      navigationOptions : {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='home' style={{ color: tintColor }} />
        )
    } },
    B: { screen: SearchTab,
      navigationOptions : {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='search' style ={{ color: tintColor }}/>
        ) }
    },
    D: { screen: LikesTab },
    E: { screen: ProfileTab }
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        backgroundColor: 'white',
      },
      iconStyle: { height: Dimensions.get('window').height/20 },
      activeTintColor: '#000',
      inactiveTintColor: '#d1cece',
      labelStyle : { height: 5 },
      upperCaseLabel: false,
      showIcon: true,
    }
  });
  
const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {

  //상단 바 옵션
  static navigationOptions = {
    headerTitle: (
      <Image source={require('../assets/OnlyLogo.png')}
             style = {{ width: 75, height: 35, marginLeft:15 }}/>
    ),
    headerRight: <Icon name='send' style={{ paddingRight:10 }}/>,
    headerTitleStyle: {
        flex: 1,
        paddingLeft:20,
        //android title 가운데 정렬
    },
  }

  render() {
    return (
        <AppTabContainet/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});