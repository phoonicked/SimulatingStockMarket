import React from 'react';
import {View, Text, Switch, Pressable, ScrollView} from 'react-native';
import { styles } from '@/styles';
import { useAuth } from '@/app/contexts/AuthContext';

const SettingsScreen = () => {
    const { signOut } = useAuth();

    return (
        <ScrollView contentContainerStyle={styles.settingsContainer}>
            <View style={styles.settingsSection}>
                <Text style={styles.header}>General</Text>
                <View style={styles.settingsGroup}>
                    <Pressable style={styles.settingsOption}>
                        <Text style={styles.generalText}>Edit Profile</Text>
                    </Pressable>
                    <Pressable style={styles.settingsOption}>
                        <Text style={styles.generalText}>Leave feedback</Text>
                    </Pressable>
                    <View style={styles.settingsOption}>
                        <Text style={styles.generalText}>Switch Themes</Text>
                        <Switch />
                    </View>
                    <Pressable style={styles.settingsOption}>
                        <Text style={styles.generalText}>Language</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.settingsSection}>
                <Text style={styles.header}>Security</Text>
                <View style={styles.settingsGroup}>
                    <Pressable style={styles.settingsOption}>
                        <Text style={styles.generalText}>Privacy</Text>
                    </Pressable>
                    <View style={styles.settingsOption}>
                        <Text style={styles.generalText}>Notifications</Text>
                        <Switch />
                    </View>
                    <Pressable style={styles.settingsOption}>
                        <Text style={styles.generalText}>Authorisations</Text>
                    </Pressable>
                    <Pressable style={styles.settingsOption}>
                        <Text style={styles.generalText}>Face ID</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.logOutSection}>
                <Pressable style={styles.signOutButton} onPress={signOut}>
                    <Text style={styles.signOutButtonText}>Sign Out</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

export default SettingsScreen;
