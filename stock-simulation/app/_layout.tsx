import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import MainTabs from './navigation/MainTabs';
import WelcomeScreen from './screens/welcome';

const Stack = createStackNavigator();

const RootLayout = () => {
    const { user } = useAuth();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {user ? (
                <Stack.Screen name="navigation/MainTabs" component={MainTabs} />
            ) : (
                <Stack.Screen name="screens/index" component={WelcomeScreen} />
            )}
        </Stack.Navigator>
    );
};

const LayoutWrapper = () => {
    return (
        <AuthProvider>
            <RootLayout />
        </AuthProvider>
    );
};

export default LayoutWrapper;
