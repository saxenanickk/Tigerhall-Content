import {View, TextInput} from 'react-native';
import React from 'react';
import {TigerhallText} from '../tigerhallText';
import {hScale} from '../../utils';
import {styles} from './styles';

const Search = () => (
  <View style={{marginVertical: hScale(14)}}>
    <TigerhallText color={'#FFFFFF'} size={hScale(14)} weight={'700'}>
      Search
    </TigerhallText>
    <TextInput
      style={styles.input}
      placeholderTextColor={'#989898'}
      cursorColor={'#ffffff'}
      placeholder="Type any keyword"
    />
  </View>
);

export default Search;
