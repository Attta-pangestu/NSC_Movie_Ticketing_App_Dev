import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookingSeatScreen from './screens/BookingSeatScreen';
import TabNavigator from './navigator/TabNavigator';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import { COLORS } from './theme/theme';
import MovieDetailScreen from './screens/MovieDetailScreen';
import SplashScreen from './screens/SplashScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MovieListScreen from './screens/MovieListScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraLight': require('./assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color={COLORS.Orange} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ animation: 'slide_from_left' }}
        />
        <Stack.Screen
          name='Register'
          component={RegisterScreen}
          options={{ animation: 'slide_from_right' }}
        />
         <Stack.Screen
          name='MovieDetails'
          component={MovieDetailScreen}
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name='MovieListScreen'
          component={MovieListScreen}
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{ animation: 'default' }}
        />
       
        <Stack.Screen
          name="SeatBooking"
          component={BookingSeatScreen}
          options={{ animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfileScreen}
          options={{ animation: 'slide_from_left' }}
        />
        <Stack.Screen
          name='Profile'
          component={UserProfileScreen}
          options={{ animation: 'slide_from_right' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
