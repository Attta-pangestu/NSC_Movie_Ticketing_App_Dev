import React, { useState } from 'react';
import { View, Text, Alert, ActivityIndicator } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { COLORS } from '../../theme/theme';
import * as IconsSolid from 'react-native-heroicons/solid';
import { styles } from './style';
import { auth, db } from '../../api/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';

type Props = {
  navigation: any;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      if (user) {
        await db.collection('users').doc(user.uid).set({
          email: user.email,
          lastLogin: new Date(),
        }, { merge: true });
        const token = await user.getIdToken();
        await AsyncStorage.setItem('token', token);
        const userDoc = await db.collection('users').doc(user.uid).get();
        if (userDoc.exists) {
          console.log('User Data:', userDoc.data());
        }
        setIsLoggingIn(false);
        setIsLoginSuccess(true);
        setTimeout(() => {
          setIsLoginSuccess(false);
          navigation.navigate('Tab');
        }, 2000); // Menunggu 2 detik sebelum navigasi
      } else {
        setIsLoggingIn(false);
        console.error('No user returned from authentication.');
      }
    } catch (error) {
      setIsLoggingIn(false);
      Alert.alert('Login Error', (error as Error).message);
    }
  };

  return (
    <View style={styles.container}>
      <IconsSolid.UserCircleIcon size={100} color={COLORS.Orange} style={styles.logo} />
      <Text style={styles.title}>NSC</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
        theme={{ colors: { text: COLORS.White, placeholder: COLORS.WhiteRGBA50, primary: COLORS.Orange, background: '#0b0b0b' } }}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        mode="outlined"
        theme={{ colors: { text: COLORS.White, placeholder: COLORS.WhiteRGBA32, primary: COLORS.Orange, background: '#0b0b0b' } }}
        secureTextEntry
      />
      <Button mode="contained" onPress={handleLogin} style={styles.loginButton}>
        Login
      </Button>
      <Modal isVisible={isLoggingIn} backdropOpacity={0.5}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={COLORS.Orange} />
          <Text style={{ color: COLORS.White, marginTop: 10 }}>Logging in...</Text>
        </View>
      </Modal>
      <Modal isVisible={isLoginSuccess} backdropOpacity={0.5}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <IconsSolid.CheckCircleIcon size={100} color={COLORS.Orange} />
          <Text style={{ color: COLORS.White, marginTop: 10 }}>Login Successful!</Text>
        </View>
      </Modal>
      <Text style={styles.orText}>OR</Text>
      <Button mode="outlined" theme={{ colors: { primary: COLORS.Orange } }} onPress={() => navigation.navigate('Register')} style={styles.registerButton}>
        Register
      </Button>
    </View>
  );
};

export default LoginScreen;