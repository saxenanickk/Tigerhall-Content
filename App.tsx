import {ApolloProvider} from '@apollo/client';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {client} from './src/data';
import {Home} from './src/screens/home';
import {Colors} from './src/utils';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={Colors.DARK_TEAL}
        />
        <Home />
      </SafeAreaView>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK_TEAL,
  },
});

export default App;
