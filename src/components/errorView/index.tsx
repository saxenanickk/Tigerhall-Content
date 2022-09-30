import {View} from 'react-native';
import React from 'react';
import {hScale, wScale} from '../../utils';
import {TigerhallText} from '../tigerhallText';
import {strings} from '../../data/strings/en';
import {Colors} from '../../utils';

const ErrorView = () => (
  <View style={{paddingHorizontal: wScale(20)}}>
    <TigerhallText color={Colors.ERROR} weight={'500'} size={hScale(16)}>
      {strings.error_occured}
    </TigerhallText>
  </View>
);

export {ErrorView};
