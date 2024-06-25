import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import authNavigator from '@/app/navigation/authNavigator'; // Import the AuthNavigator
import RootLayout from './app/_layout'; // Adjust the import path as needed
import { checkLoginStatus } from '@/app/utils/auth';
import AuthNavigator from "@/app/navigation/authNavigator";

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLoginStatus = async () => {
            const loggedIn = await checkLoginStatus();
            setIsLoggedIn(loggedIn);
            setLoading(false);
        };

        fetchLoginStatus();
    }, []);

    if (loading) {
        return null; // Or a loading indicator
    }

    return (
            <NavigationContainer>
                {isLoggedIn ? <RootLayout /> : <AuthNavigator />}
            </NavigationContainer>
    );
}
