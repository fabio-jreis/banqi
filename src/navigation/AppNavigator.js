import styles from './style';
import { palette }  from '../constants/Colors';
import { HomeView, AccessHomeView } from '../views';
import React, { useEffect, Component } from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createStackNavigator, Header } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Image, TouchableOpacity, Platform, Dimensions, View, Text, ImageBackground } from 'react-native';

class HeaderHome extends Component {
  render() {
      return (
        <View style={styles.containerHeader}>           
            <Text style={styles.textHeader} >meuBANQi</Text>
        </View>
      );
  }
}

class HeaderNews extends Component {
  render() {
      return (
        <View style={styles.containerHeader}>           
            <Text style={styles.textHeader} >NOVIDADES BOTICARIO</Text>
        </View>
      );
  }
}


const Home_StackNavigator = createStackNavigator({
    Home: {
      screen: HomeView,
      navigationOptions: ({ navigation }) => ({
        headerTitle: () => <HeaderHome navigationProps={navigation} />,
        headerTintColor: palette.secondary,
        header: (props) => (
          <Header {...props} />
        ),
        headerStyle: {
          backgroundColor: palette.header
        },
        safeAreaInsets: { bottom: 0 },
        headerBackTitle: null
      }),
    }      
    
});

//Drawer Navigator Which will provide the structure of our App
const BtAppStack = createDrawerNavigator(
    {
      //Drawer Optons and indexing
      home: {
        screen: Home_StackNavigator
      }
    }
);

const AccessStack = createStackNavigator({
  ac: AccessHomeView
},{
  headerMode: 'none'
});

const AppNavigator = createSwitchNavigator({
  Access: AccessStack,
  Main: BtAppStack
},{

});

export default (AppContainer = createAppContainer(AppNavigator));