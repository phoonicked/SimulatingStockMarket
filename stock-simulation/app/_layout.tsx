import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider, useAuth } from '@/app/contexts/authContext';
import Welcome from '@/app/welcome';

const RootLayout = () => {
    return (
        <AuthProvider>
            <SafeAreaProvider>
                <AppNavigator />
            </SafeAreaProvider>
        </AuthProvider>
    );
};

const AppNavigator = () => {
    const { user } = useAuth();

    if (!user) {
        return <Welcome />;
    }

    return (
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
                    } else if (route.name === 'portfolio') {
                        iconName = focused ? 'pie-chart' : 'pie-chart-outline';
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
            <Tabs.Screen name="portfolio" options={{ title: 'Portfolio' }} />
        </Tabs>
    );
};

export default RootLayout;
