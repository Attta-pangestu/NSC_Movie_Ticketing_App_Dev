import React, { useEffect, useState } from 'react';
import { View, Animated } from 'react-native';
import { styles } from './style';

const SplashScreen = ({ navigation }: any) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.logoText, { opacity: fadeAnim }]}>
        NSC
      </Animated.Text>
    </View>
  );
};



export default SplashScreen;
