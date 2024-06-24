import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootLayout from './app/_layout'; // Adjust the import path as needed

export default function App() {
    return (
        <NavigationContainer>
            <RootLayout />
        </NavigationContainer>
    );
}
