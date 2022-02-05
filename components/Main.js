import React, { Component, useEffect } from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer, NavigationActions } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack';
import ComicDetail from '../screens/ComicDetail';
import Home from '../screens/Home';
import NavigationService from '../services/NavigationService';

const HomeStackNavigator = createStackNavigator({
    HomeScreen: {
        screen: Home,
        navigationOptions: {
            title: 'Home'
        }
    },
    ComicDetail: {
        screen: ComicDetail,
        navigationOptions: {
            title: 'Comic'
        }        
    }
});

const MainNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStackNavigator
        },

    }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
    render() {
        return (
        
                <AppNavigator ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef); }}/>
            
        );
    }    
}

export default Main;