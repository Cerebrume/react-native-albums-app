/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';
import styles from './Styles/index'
import Header from './Components/Header';
import AlbumList from './Components/AlbumList';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Albums'}/>
        <AlbumList />
      </View>
    );
  }
}
