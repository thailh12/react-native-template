import React from 'react';
import { View, Text } from 'react-native';
import { CounterContainer } from '../containers/CounterContainer';

import { HomeContainer } from '../containers/HomeContainer';
import { Subscribe } from 'unstated';

class HomeView extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.data.state.name}</Text>
        <Text>Count in counter</Text>
        <Text>{this.props.count.state.count}</Text>
      </View>
    );
  }
}

export class Home extends React.Component {
  render() {
    return (
      <Subscribe to={[HomeContainer, CounterContainer]}>
        {(home, count) => <HomeView data={home} count={count} />}
      </Subscribe>
    );
  }
}
