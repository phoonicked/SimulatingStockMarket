import React from 'react';
import {View, Text, SafeAreaView, Pressable} from 'react-native';
import { styles } from '@/styles';
import { useAuth } from '@/app/contexts/AuthContext';

const SettingsScreen = () => {
    const { signOut } = useAuth();
    return (
        <View style={styles.container}>
            <Text style={styles.header}>General</Text>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Edit Profile</Text>
            </Pressable>
            <Text style={styles.header}>Security</Text>
            <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Notifications</Text>
            </View>
            <Pressable style={styles.logOutButton} onPress={signOut}>
                <Text style={styles.logOutButtonText}>Log Out</Text>
            </Pressable>
        </View>
    );
};

export default SettingsScreen;
