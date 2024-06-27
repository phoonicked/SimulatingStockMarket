import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import IndexScreen from '../screens/index';
import NewsScreen from '../screens/news';
import SettingsScreen from '../screens/settings';
import PortfolioScreen from '../screens/portfolio';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: keyof typeof Ionicons.glyphMap | undefined;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'News') {
                        iconName = focused ? 'newspaper' : 'newspaper-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    } else if (route.name === 'Portfolio') {
                        iconName = focused ? 'pie-chart' : 'pie-chart-outline';
                    }

                    return iconName ? <Ionicons name={iconName} size={size} color={color} /> : null;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: '#292929',
                    borderTopColor: 'transparent',
                },
            })}
        >
            <Tab.Screen name="Home" component={IndexScreen} />
            <Tab.Screen name="News" component={NewsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Portfolio" component={PortfolioScreen} />
        </Tab.Navigator>
    );
};

export default MainTabs;
