import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const checkNotificationPermissions = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    return status === 'granted';
};

export const getStoredNotificationSettings = async () => {
    const storedValue = await AsyncStorage.getItem('notificationsEnabled');
    return storedValue ? JSON.parse(storedValue) : false;
};

export const toggleNotificationSettings = async (currentSetting: boolean) => {
    const newSetting = !currentSetting;
    if (newSetting) {
        const { status } = await Notifications.requestPermissionsAsync();
        if (status !== 'granted') {
            alert('Failed to get push token for push notification!');
            return currentSetting;
        }
    }
    await AsyncStorage.setItem('notificationsEnabled', JSON.stringify(newSetting));
    return newSetting;
};
