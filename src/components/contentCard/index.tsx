import {View} from 'react-native';
import React from 'react';
import {Expert} from '../../data/typings';
import {TigerhallText} from '../tigerhallText';
import {styles} from './styles';
import FastImage from 'react-native-fast-image';
import {Colors} from '../../utils';

interface Props {
  image?: string;
  category?: string;
  title?: string;
  expert?: Expert | null;
}

const ContentCard: React.FC<Props> = ({
  image = '',
  category = '',
  title = '',
  expert = {
    firstName: '',
    lastName: '',
    title: '',
    company: '',
  },
}) => {
  const imageBase = 'https://images.prod.tigerhall.io/';

  const optimisedImage = imageBase.concat(
    ...['resize/250x/', image?.split(imageBase)[1]],
  );

  return (
    <View style={styles.container}>
      <FastImage
        source={{uri: optimisedImage}}
        resizeMode={'cover'}
        style={styles.image}
      />
      <View style={styles.content}>
        <TigerhallText color={Colors.ORANGE} weight={'700'} size={12}>
          {category.toUpperCase()}
        </TigerhallText>
        <TigerhallText color={Colors.BLACK} size={18} weight={'700'}>
          {title.toUpperCase()}
        </TigerhallText>
        <TigerhallText
          color={Colors.LIGHT_BLACK}
          weight={'600'}
          size={14}>{`${expert?.firstName} ${expert?.lastName}`}</TigerhallText>
        <TigerhallText
          color={Colors.LIGHT_BLACK}
          weight={'600'}
          size={14}>{`${expert?.title.toUpperCase()}`}</TigerhallText>
        <TigerhallText
          color={Colors.ORANGE}
          weight={'600'}
          size={14}>{`${expert?.company}`}</TigerhallText>
      </View>
    </View>
  );
};

export default React.memo(ContentCard);
