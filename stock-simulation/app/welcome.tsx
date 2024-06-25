import React from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "@/styles";

const welcomeScreen = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.centerContent}>
                <Image source={require('../assets/images/logo.png')} style={styles.logo} />
                <Text style={styles.appTitle}>Oppie</Text>
                <Text style={styles.slogan}>All you need for market research!</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.createButton]} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.createButtonText}>Create an account</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>or continue with</Text>
            <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.socialButton}>
                    <Image source={require('../assets/images/apple.png')} style={styles.socialIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Image source={require('../assets/images/google.png')} style={styles.socialIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default welcomeScreen;