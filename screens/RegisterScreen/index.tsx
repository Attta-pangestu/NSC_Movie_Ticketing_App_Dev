import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { COLORS } from '../../theme/theme';
import * as IconsSolid from 'react-native-heroicons/solid';
import { styles } from './style';
import { auth, db } from '../../api/firebase';

type Props = {
    navigation: any;
};

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (name: string, value: string) => {
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleRegister = async () => {
        if (form.password !== form.confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }

        try {
            const userCredential = await auth.createUserWithEmailAndPassword(form.email, form.password);
            const user = userCredential.user;
            if (user) {
                await db.collection('users').doc(user.uid).set({
                    firstname: form.firstname,
                    lastname: form.lastname,
                    email: user.email,
                    createdAt: new Date()
                });
            }
            navigation.navigate('Login');
        } catch (error) {
            Alert.alert('Registration Error', (error as Error).message);
        }
    };

    return (
        <View style={styles.container}>
            <IconsSolid.UserCircleIcon size={100} color={COLORS.Orange} style={styles.logo} />
            <Text style={styles.title}>Register</Text>
            <TextInput
                label="Firstname"
                value={form.firstname}
                onChangeText={value => handleInputChange('firstname', value)}
                style={styles.input}
                mode="outlined"
                theme={{ colors: { text: COLORS.White, placeholder: COLORS.WhiteRGBA32, primary: COLORS.Orange, background: '#0b0b0b' } }}
                autoCapitalize="words"
            />
            <TextInput
                label="Lastname"
                value={form.lastname}
                onChangeText={value => handleInputChange('lastname', value)}
                style={styles.input}
                mode="outlined"
                theme={{ colors: { text: COLORS.White, placeholder: COLORS.WhiteRGBA32, primary: COLORS.Orange, background: '#0b0b0b' } }}
                autoCapitalize="words"
            />
            <TextInput
                label="Email"
                value={form.email}
                onChangeText={value => handleInputChange('email', value)}
                style={styles.input}
                mode="outlined"
                theme={{ colors: { text: COLORS.White, placeholder: COLORS.WhiteRGBA32, primary: COLORS.Orange, background: '#0b0b0b' } }}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                label="Password"
                value={form.password}
                onChangeText={value => handleInputChange('password', value)}
                style={styles.input}
                mode="outlined"
                theme={{ colors: { text: COLORS.White, placeholder: COLORS.WhiteRGBA32, primary: COLORS.Orange, background: '#0b0b0b' } }}
                secureTextEntry
            />
            <TextInput
                label="Confirm Password"
                value={form.confirmPassword}
                onChangeText={value => handleInputChange('confirmPassword', value)}
                style={styles.input}
                mode="outlined"
                theme={{ colors: { text: COLORS.White, placeholder: COLORS.WhiteRGBA32, primary: COLORS.Orange, background: '#0b0b0b' } }}
                secureTextEntry
            />
            <Button mode="contained" onPress={handleRegister} style={styles.registerButton}>
                Register
            </Button>
        </View>
    );
};

export default RegisterScreen;
