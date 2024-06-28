import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import * as IconsSolid from 'react-native-heroicons/solid';
import { COLORS, FONTSIZE } from '../../theme/theme';

type InputProps = {
  searchHandler: (searchText: string) => void;
};

const InputHeader = ({ searchHandler }: InputProps) => {
  const [searchText, setSearchText] = useState<string>('');
  const navigation = useNavigation();

  return (
    <View style={styles.inputHeaderContainer}>
      <Text style={styles.appName}>NSC</Text>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.textInput}
          onChangeText={(textInput) => setSearchText(textInput)}
          value={searchText}
          placeholder="Search your Movies..."
          placeholderTextColor={COLORS.WhiteRGBA32}
          onSubmitEditing={() => searchHandler(searchText)}
        />
        <TouchableOpacity
          style={styles.searchIcon}
          onPress={() => searchHandler(searchText)}>
          <IconsSolid.MagnifyingGlassIcon
            color={COLORS.Orange}
            size={FONTSIZE.size_20}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Profile')}>
        <IconsSolid.UserCircleIcon size={50} color={COLORS.White} />
      </TouchableOpacity>
    </View>
  );
};

export default InputHeader;
