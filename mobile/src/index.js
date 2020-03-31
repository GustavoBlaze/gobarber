import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import './config/ReacotronConfig';
import Routes from '~/routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}
