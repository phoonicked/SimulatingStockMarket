import React from 'react';
import { View, Text, Image, Pressable } from "react-native";
import { styles } from "@/styles";
import { useAuth } from "@/app/contexts/AuthContext";

const WelcomeScreen = () => {
    const { signIn, createAccount } = useAuth()

    return (
        <View style={styles.container}>
            <View style={styles.centerContent}>
                <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
                <Text style={styles.appTitle}>Oppie</Text>
                <Text style={styles.slogan}>All you need for market research</Text>
            </View>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Sign in</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.createButton]} onPress={createAccount}>
                <Text style={styles.createButtonText}>Create an account</Text>
            </Pressable>
            <View style={styles.orTextContainer}>
                <View style={styles.orTextLine} />
                <Text style={styles.orText}>or continue with</Text>
                <View style={styles.orTextLine} />
            </View>
        <View style={styles.socialContainer}>
                <Pressable style={styles.socialButton}>
                    <Image source={require('../../assets/images/apple.png')} style={styles.socialIcon} />
                </Pressable>
                <Pressable style={styles.socialButton} onPress={ signIn }>
                    <Image source={require('../../assets/images/google.png')} style={styles.socialIcon} />
                </Pressable>
            </View>
        </View>
    );
};

export default WelcomeScreen;