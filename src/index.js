import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';
import Routes from './routes';

export default function App() {
  return (
    <Routes
    // ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
    />
  );
}
