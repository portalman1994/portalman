import * as React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';


function HomeScreen({ navigation }) {
    return <Home />;
}

function CollectionScreen({ navigation }) {
    return <View></View>;
}

function WishlistScreen({ navigation }) {
    return <View></View>;
}

const Tab = createBottomTabNavigator();

function Main() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if(route.name === 'Collection') {
                            iconName = focused ? 'book' : 'book-outline';
                        } else if (route.name === 'Wishlist') {
                            iconName = focused ? 'heart' : 'heart-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'steelblue',
                    tabBarInactiveTintColor: 'slategray',
                })}>
                <Tab.Screen name='Home' component={HomeScreen} />
                <Tab.Screen name='Collection' component={CollectionScreen} />
                <Tab.Screen name='Wishlist' component={WishlistScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Main;