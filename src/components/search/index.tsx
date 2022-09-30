import {View, TextInput} from 'react-native';
import React, {FC} from 'react';
import {TigerhallText} from '../tigerhallText';
import {hScale} from '../../utils';
import {styles} from './styles';
import {strings} from '../../data/strings/en';

interface Props {
  value: string | undefined;
  onChangeText?: ((text: string) => void) | undefined;
}

const Search: FC<Props> = ({value, onChangeText}) => (
  <View style={styles.container}>
    <TigerhallText color={'#FFFFFF'} size={hScale(14)} weight={'700'}>
      {strings.search}
    </TigerhallText>
    <TextInput
      style={styles.input}
      placeholderTextColor={'#989898'}
      cursorColor={'#ffffff'}
      placeholder={strings.type_any_keyword}
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);

export {Search};
