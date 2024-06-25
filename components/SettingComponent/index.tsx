import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {styles} from './style';

interface SettingComponentProps {
  icon: string;
  heading: string;
  subheading: string;
  subtitle: string;
}

const SettingComponent: React.FC<SettingComponentProps> = (props) => {
  return (
    <View style={styles.container}>
      <View></View>
      <View style={styles.settingContainer}>
        <Text style={styles.title}>{props.heading}</Text>
        <Text style={styles.subtitle}>{props.subheading}</Text>
        <Text style={styles.subtitle}>{props.subtitle}</Text>
      </View>
      <View style={styles.iconBG}></View>
    </View>
  );
};

export default SettingComponent;
