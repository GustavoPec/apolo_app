import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/login';
import Home from '../../screens/home';
import User from '../../screens/user';
import Fidelity from '../../screens/fidelity';
import Price from '../../screens/price';
import Schedule from '../../screens/schedule';

const {Navigator, Screen} = createNativeStackNavigator();


//Rotas de navegação
export const Routes = () => {
  return (
    <Navigator initialRouteName="home" screenOptions={{headerShown: false}} >
      <Screen name="login" component={Login} />
      <Screen name="home" component={Home} />
      <Screen name="user" component={User} />
      <Screen name="fidelity" component={Fidelity} />
      <Screen name="price" component={Price} />
      <Screen name="schedule" component={Schedule} />
    </Navigator>
  );
};
