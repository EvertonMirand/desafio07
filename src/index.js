import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';

export default function App() {
  return <StatusBar barStyle="light-content" />;
}
