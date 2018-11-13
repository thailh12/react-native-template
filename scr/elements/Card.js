import React from 'react';
import { View, Text } from 'react-native';
import { Title } from './Title';

export const Card = props => {
  return (
    <View>
      <Title>{props.name}</Title>
    </View>
  );
};
