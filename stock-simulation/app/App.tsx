import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootLayout from './_layout'; // Adjust the import path as needed
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <RootLayout />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
