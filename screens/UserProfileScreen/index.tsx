import * as React from 'react';
import {Text, View, StatusBar} from 'react-native';
import {styles} from './style';
import AppHeader from '../../components/AppHeader';
import * as IconsSolid from 'react-native-heroicons/solid';
import {COLORS} from '../../theme/theme';

const UserProfileScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.appHeaderContainer}>
        <AppHeader header={'My Profile'} action={() => navigation.goBack()} />
      </View>

      <View style={styles.profileContainer}>
        <IconsSolid.UserCircleIcon color={COLORS.White} size={50} />
        <Text style={styles.avatarText}>User</Text>
      </View>
    </View>
  );
};

export default UserProfileScreen;
