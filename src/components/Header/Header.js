import React from 'react';
import { View } from 'react-native';
import {
  Wrapper,
  Container,
  Logo,
  BasketContainer,
  ItemCount,
} from './Header.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header({ navigation, cartSize }) {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer onPress={() => {}}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{cartSize || 0}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}
