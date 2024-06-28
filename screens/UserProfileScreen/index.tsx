import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { auth, db } from '../../api/firebase';
import { styles } from './style';

const UserProfileScreen = ({ navigation }: any) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const userDoc = await db.collection('users').doc(currentUser.uid).get();
        if (userDoc.exists) {
          setUser(userDoc.data());
        }
      } else {
        navigation.navigate('Login');
      }
    };
    fetchUser();
  }, [navigation]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Logout Error', (error as Error).message);
    }
  };

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.profileImage} />
      <Text style={styles.profileName}>{user.firstname} {user.lastname}</Text>
      <Text style={styles.profileEmail}>{user.email}</Text>
      {user.emailVerified ? null : (
        <Text style={styles.profileInfo}>Jenis Akun: Not Verified</Text>
      )}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfileScreen;
