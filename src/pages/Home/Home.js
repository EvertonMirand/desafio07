import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container } from './Home.styles';
import { FlatList } from 'react-native-gesture-handler';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <FlatList horizontal />
      </Container>
    );
  }
}
