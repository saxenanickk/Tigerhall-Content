import {View, TextInput} from 'react-native';
import React, {FC} from 'react';
import {TigerhallText} from '../tigerhallText';
import {hScale} from '../../utils';
import {styles} from './styles';

interface Props {
  value: string | undefined;
  onChangeText?: ((text: string) => void) | undefined;
}

const Search: FC<Props> = ({value, onChangeText}) => (
  <View style={styles.container}>
    <TigerhallText color={'#FFFFFF'} size={hScale(14)} weight={'700'}>
      Search
    </TigerhallText>
    <TextInput
      style={styles.input}
      placeholderTextColor={'#989898'}
      cursorColor={'#ffffff'}
      placeholder="Type any keyword"
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);

export {Search};
