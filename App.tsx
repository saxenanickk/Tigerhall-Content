import {ApolloProvider} from '@apollo/client';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {client} from './src/data';
import {Home} from './src/screens/home';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#001315'} />
        <Home />
      </SafeAreaView>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001315',
  },
});

export default App;
