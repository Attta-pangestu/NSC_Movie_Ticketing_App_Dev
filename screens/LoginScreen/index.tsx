import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { COLORS } from '../../theme/theme';
import * as IconsSolid from 'react-native-heroicons/solid';
import { styles } from './style';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
  };

  const handleGoogleLogin = () => {
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
        theme={{ colors: { text: COLORS.White, placeholder: COLORS.WhiteRGBA32, primary: COLORS.Orange, background: '#0b0b0b' } }}
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
      <Text style={styles.orText}>OR</Text>
      <Button mode="outlined" onPress={handleGoogleLogin} style={styles.googleButton}>
        Login with Google
      </Button>
    </View>
  );
};



export default LoginScreen;
