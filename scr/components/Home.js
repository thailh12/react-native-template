import React from 'react';
import { View, Text } from 'react-native';
import { HomeContainer } from '../containers/HomeContainer';
import { Subscribe } from 'unstated';

class HomeView extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.data.state.name}</Text>
      </View>
    );
  }
}

export class Home extends React.Component {
  render() {
    return (
      <Subscribe to={[HomeContainer]}>
        {home => <HomeView data={home} />}
      </Subscribe>
    );
  }
}
