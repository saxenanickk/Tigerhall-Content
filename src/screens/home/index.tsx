import React, {FC, useEffect, useRef, useState} from 'react';
import {ActivityIndicator, FlatList, ListRenderItem, View} from 'react-native';
import {styles} from './styles';
import ContentCard from '../../components/contentCard';
import {hScale} from '../../utils';
import {Search} from '../../components/search';
import {GET_CONTENT_CARDS_QUERY} from '../../data';
import {useQuery} from '@apollo/client';

const ItemSeparatorComponent: FC = () => <View style={{height: hScale(10)}} />;

const Home: FC = () => {
  const [searchKeywords, setSearchKeywords] = useState('');
  const limit = 5;
  const offsetRef = useRef(0);
  const totalRef = useRef(0);
  const {loading, error, data, fetchMore} = useQuery(GET_CONTENT_CARDS_QUERY, {
    variables: {
      offset: 0,
      limit: limit,
      keywords: searchKeywords,
    },
  });

  useEffect(() => {
    if (data && totalRef.current === 0) {
      totalRef.current = data?.contentCards?.meta?.total;
    }
  }, [data]);

  const renderItem: ListRenderItem<any> | null | undefined = ({item}) => {
    const {
      image: {uri = ''},
      name = '',
      categories = '',
      experts = [],
    } = item;

    return (
      <ContentCard
        image={uri}
        title={name}
        category={categories[0]?.name}
        expert={{
          firstName: experts[0]?.firstName,
          lastName: experts[0]?.lastName,
          company: experts[0]?.company,
          title: experts[0]?.title,
        }}
      />
    );
  };

  const onEndReached = () => {
    if (totalRef.current > offsetRef.current) {
      offsetRef.current = offsetRef.current + limit;
      fetchMore({
        variables: {
          offset: offsetRef.current,
        },
        updateQuery: (prev, {fetchMoreResult}) => {
          if (!fetchMoreResult) {
            return prev;
          }
          totalRef.current = fetchMoreResult?.contentCards?.meta?.total;
          return Object.assign({}, prev, {
            contentCards: {
              edges: [
                ...prev.contentCards.edges,
                ...fetchMoreResult.contentCards.edges,
              ],
              meta: fetchMoreResult.contentCards.meta,
            },
          });
        },
      });
    }
  };

  if (loading) {
    //
  }

  if (error) {
    //
  }

  return (
    <View style={styles.container}>
      <Search
        value={searchKeywords}
        onChangeText={text => setSearchKeywords(text)}
      />
      <FlatList
        ListFooterComponent={loading ? <ActivityIndicator /> : null}
        ItemSeparatorComponent={ItemSeparatorComponent}
        contentContainerStyle={styles.listContentContainerStyle}
        data={data?.contentCards?.edges}
        renderItem={renderItem}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        keyExtractor={item => item?.id}
      />
    </View>
  );
};

export {Home};
