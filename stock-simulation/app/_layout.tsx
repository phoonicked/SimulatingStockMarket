import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const RootLayout = () => {
    return (
        <SafeAreaProvider>
            <Tabs
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName: keyof typeof Ionicons.glyphMap | undefined;

                        if (route.name === 'index') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'news') {
                            iconName = focused ? 'newspaper' : 'newspaper-outline';
                        } else if (route.name === 'settings') {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: {
                        backgroundColor: '#292929',
                        borderTopColor: 'transparent',
                    },
                })}
            >
                <Tabs.Screen name="index" options={{ title: 'Home' }} />
                <Tabs.Screen name="news" options={{ title: 'News' }} />
                <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
            </Tabs>
        </SafeAreaProvider>
    );
};

export default RootLayout;
