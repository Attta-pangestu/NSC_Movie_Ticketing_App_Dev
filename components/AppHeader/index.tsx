import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { styles } from './style';
import React from 'react';



type AppHeaderProps = {
  header: string;
  action: () => void;
  Icon: React.ReactNode;
};

const AppHeader = ({header, action, Icon} : AppHeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconBG} onPress={() => action()}>
        {Icon}
      </TouchableOpacity>
      <Text style={styles.headerText}>{header}</Text>
      <View style={styles.emptyContainer}></View>
    </View>
  );
};

export default AppHeader;