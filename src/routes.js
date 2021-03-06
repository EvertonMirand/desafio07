import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import colors from './styles/colors';
import Header from './components/Header/Header';

const routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
      cardStyle: {
        backgroundColor: colors.dark,
      },
    }
  )
);

export default routes;
