import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {styles} from './style';
import React from 'react';
import * as IconsSolid from 'react-native-heroicons/solid';
import {FONTSIZE} from '../../theme/theme';

type AppHeaderProps = {
  header: string;
  action: () => void;
};

const AppHeader = ({header, action}: AppHeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconBG} onPress={() => action()}>
        <IconsSolid.XMarkIcon size={FONTSIZE.size_30} color={'white'} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{header}</Text>
      <View style={styles.emptyContainer}></View>
    </View>
  );
};

export default AppHeader;
