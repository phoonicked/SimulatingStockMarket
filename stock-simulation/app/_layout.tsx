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

                    if (route.name === 'screens/index') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'screens/news') {
                        iconName = focused ? 'newspaper' : 'newspaper-outline';
                    } else if (route.name === 'screens/settings') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    } else if (route.name === 'screens/portfolio') {
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
            <Tabs.Screen name="screens/index" options={{ title: 'Home' }} />
            <Tabs.Screen name="screens/news" options={{ title: 'News' }} />
            <Tabs.Screen name="screens/settings" options={{ title: 'Settings' }} />
            <Tabs.Screen name="screens/portfolio" options={{ title: 'Portfolio' }} />
        </Tabs>
    );
};

export default RootLayout;
