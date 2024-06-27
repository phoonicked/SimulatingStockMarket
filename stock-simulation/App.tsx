import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider, useAuth } from './app/contexts/authContext';
import Welcome from './app/welcome';
import Home from './app/index';
import News from './app/news';
import Settings from './app/settings';
import Portfolio from './app/portfolio';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    const { user } = useAuth();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {user ? (
                    <>
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="News" component={News} />
                        <Stack.Screen name="Settings" component={Settings} />
                        <Stack.Screen name="Portfolio" component={Portfolio} />
                    </>
                ) : (
                    <Stack.Screen name="Welcome" component={Welcome} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default function App() {
    return (
        <AuthProvider>
            <AppNavigator />
        </AuthProvider>
    );
}
