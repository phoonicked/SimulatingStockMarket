import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Platform } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

interface AuthContextType {
    user: any;
    signIn: () => void;
    signOut: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState(null);

    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: Platform.select({
            ios: '1054031533304-hudflhrvuckfup870i6r2qtlmba236c2.apps.googleusercontent.com',
            web: '1054031533304-gauteo3vaco80voion2pt5m1b95cpsi1.apps.googleusercontent.com',
        }),
    });

    useEffect(() => {
        if (response?.type === 'success') {
            const { id_token } = response.params;

            const authenticate = async () => {
                const userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
                    headers: { Authorization: `Bearer ${id_token}` },
                });

                const userInfo = await userInfoResponse.json();
                setUser(userInfo);
            };

            authenticate();
        }
    }, [response]);

    const signIn = () => {
        promptAsync();
    };

    const signOut = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export { AuthContext };
