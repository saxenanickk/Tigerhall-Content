import {View, TextInput} from 'react-native';
import React, {FC} from 'react';
import {TigerhallText} from '../tigerhallText';
import {Colors, hScale} from '../../utils';
import {styles} from './styles';
import {strings} from '../../data/strings/en';

interface Props {
  onChangeText?: ((text: string) => void) | undefined;
}

const Search: FC<Props> = ({onChangeText}) => (
  <View style={styles.container}>
    <TigerhallText color={Colors.WHITE} size={hScale(14)} weight={'700'}>
      {strings.search}
    </TigerhallText>
    <TextInput
      style={styles.input}
      placeholderTextColor={Colors.GREY}
      cursorColor={Colors.WHITE}
      placeholder={strings.type_any_keyword}
      onChangeText={onChangeText}
    />
  </View>
);

export {Search};
