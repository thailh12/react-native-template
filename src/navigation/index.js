import { createBottomTabNavigator } from 'react-navigation';
import { Home } from '../components/Home';
import { Counter } from '../components/Counter';

export const Nav = createBottomTabNavigator({
  Home: Home,
  Counter: Counter
});
