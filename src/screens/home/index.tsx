import React, {FC} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {styles} from './styles';
import {ContentCard} from '../../components/contentCard';
import {hScale} from '../../utils';
import {Search} from '../../components/search';

const ListFooterComponent: FC = () => <ActivityIndicator />;

const ItemSeparatorComponent: FC = () => <View style={{height: hScale(10)}} />;

const Home: FC = () => {
  const renderItem = () => <ContentCard />;

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={Search}
        ListFooterComponent={ListFooterComponent}
        contentContainerStyle={styles.listContentContainerStyle}
        ItemSeparatorComponent={ItemSeparatorComponent}
        data={[1, 2, 3, 4, 5, 6, 7]}
        renderItem={renderItem}
      />
    </View>
  );
};

export {Home};
