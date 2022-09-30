import React, {FC} from 'react';
import {TigerhallText} from '../tigerhallText';
import {strings} from '../../data/strings/en';
import {hScale} from '../../utils';
import {Colors} from '../../utils';

const EmptyView: FC = () => (
  <TigerhallText color={Colors.WARNING} weight={'500'} size={hScale(16)}>
    {strings.no_podcasts_found}
  </TigerhallText>
);

export {EmptyView};
