import {View, Image} from 'react-native';
import React from 'react';
import {Expert} from '../../data/typings';
import {TigerhallText} from '../tigerhallText';
import {styles} from './styles';

interface Props {
  image?: string;
  category?: string;
  title?: string;
  expert?: Expert | null;
}

const ContentCard: React.FC<Props> = ({
  image = 'https://images.prod.tigerhall.io/2022-05-05/724d53c0-eb60-4b31-b174-e8bc337d4748.jpg',
  category = 'category Christina Beer',
  title = 'audio by Aylin',
  expert = {
    firstName: 'Lester',
    lastName: 'Reichert',
    title: 'expert title',
    company: 'company name test',
  },
}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} resizeMode={'cover'} />
      <View style={styles.content}>
        <TigerhallText color={'#FF8615'} weight={'700'} size={12}>
          {category.toUpperCase()}
        </TigerhallText>
        <TigerhallText size={18} weight={'700'}>
          {title.toUpperCase()}
        </TigerhallText>
        <TigerhallText
          weight={'600'}
          size={14}>{`${expert?.firstName} ${expert?.lastName}`}</TigerhallText>
        <TigerhallText
          weight={'600'}
          size={14}>{`${expert?.title.toUpperCase()}`}</TigerhallText>
        <TigerhallText
          color={'#FF8615'}
          weight={'600'}
          size={14}>{`${expert?.company}`}</TigerhallText>
      </View>
    </View>
  );
};

export {ContentCard};
