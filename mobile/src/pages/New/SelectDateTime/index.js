import React from 'react';

// import { Container } from './styles';
import Background from '~/components/Background';

export default function SelectDateTime() {
  return <Background />;
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o horário',
});
