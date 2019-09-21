import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import {
  ProductContainer,
  ProductImage,
  ProductTitle,
  AddButton,
  ProductPrice,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './Product.styles';
// import { Container } from './styles';

export default function Product({ item, onPressAddProduct, amount }) {
  return (
    <ProductContainer key={item.id}>
      <ProductImage source={{ uri: item.image }} />
      <ProductTitle>{item.title}</ProductTitle>
      <ProductPrice>{item.priceFormatted}</ProductPrice>
      <AddButton onPress={() => onPressAddProduct(item.id)}>
        <ProductAmount>
          <Icon name="add-shopping-cart" color="#FFF" size={20} />
          <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
        </ProductAmount>
        <AddButtonText>ADICIONAR</AddButtonText>
      </AddButton>
    </ProductContainer>
  );
}

Product.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.number]),
    image: PropTypes.string,
    priceFormatted: PropTypes.string,
  }).isRequired,
  // amount: PropTypes.arrayOf([PropTypes.number]).isRequired,
  onPressAddProduct: PropTypes.func.isRequired,
};
