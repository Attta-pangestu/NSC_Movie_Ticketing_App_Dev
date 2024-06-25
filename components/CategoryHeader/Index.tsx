import React from 'react';
import {Text} from 'react-native';
import {styles} from './style';

const CategoryHeader = ({title}: {title: string}) => {
  return <Text style={styles.text}>{title}</Text>;
};

export default CategoryHeader;
