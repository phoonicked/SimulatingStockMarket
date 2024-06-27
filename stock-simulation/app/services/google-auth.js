import * as Google from 'expo-auth-session/providers/google';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

export const useGoogleAuth = () => {
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        clientId: Platform.select({
            ios: '1054031533304-hudflhrvuckfup870i6r2qtlmba236c2.apps.googleusercontent.com',
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
                console.log(userInfo);
            };

            authenticate();
        }
    }, [response]);

    return { request, promptAsync };
};