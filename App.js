import React from 'react';
import { StyleSheet, View } from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';
import CardList from './components/CardList';

const items = [
  { id: 0, author: 'Italo Chagas' },
  { id: 1, author: 'Adriano Matias' }
]

export default class App extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <CardList items={items} />
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    marginTop: getStatusBarHeight(true),
    flex: 1,
    backgroundColor: '#ffffff'
  }
});