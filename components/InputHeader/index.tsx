// components/InputHeader.js
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {useState} from 'react';
import {styles} from './style';
import * as IconsSolid from 'react-native-heroicons/solid';
import {COLORS, FONTSIZE} from '../../theme/theme';

type InputProps = {
  searchHandler: (searchText: string) => void;
};

const InputHeader = ({searchHandler}: InputProps) => {
  const [searchText, setSearchText] = useState<string>('');
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
    </View>
  );
};

export default InputHeader;
