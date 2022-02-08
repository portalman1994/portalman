import React, { Component, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack';
import ComicDetail from '../screens/ComicDetail';
import Home from '../screens/Home';
import Collection from '../screens/Collection';
import NavigationService from '../services/NavigationService';
import ComicModal from '../screens/ComicModal';
import Wishlist from '../screens/Wishlist';

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
    },
    ComicModal: {
        screen: ComicModal,
        navigationOptions: {
            title: 'Edit Comic'
        }
    }    
});

const CollectionStackNavigator = createStackNavigator({
    CollectionScreen: {
        screen: Collection,
        navigationOptions: {
            title: 'Collection'
        }
    },
    ComicDetail: {
        screen: ComicDetail,
        navigationOptions: {
            title: 'Comic'
        }        
    },
    ComicModal: {
        screen: ComicModal,
        navigationOptions: {
            title: 'Edit Comic'
        }
    }    
});

const WishlistStackNavigator = createStackNavigator({
    WishlistScreen: {
        screen: Wishlist,
        navigationOptions: {
            title: 'Wishlist'
        }
    },
    ComicDetail: {
        screen: ComicDetail,
        navigationOptions: {
            title: 'Comic'
        }        
    },
    ComicModal: {
        screen: ComicModal,
        navigationOptions: {
            title: 'Edit Comic'
        }
    }
});

const MainNavigator = createBottomTabNavigator(
    {
        Home: HomeStackNavigator,
        Collection: CollectionStackNavigator,
        Wishlist: WishlistStackNavigator,

    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `md-home${focused ? '' : '-outline'}`;
                } else if (routeName === 'Collection') {
                    iconName = focused ? 'md-book' : 'md-book-outline';
                } else if (routeName === 'Wishlist') {
                    iconName = `md-heart${focused ? '' : '-outline'}`;

                }
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'steelblue',
            inactiveTintColor: 'gray',
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