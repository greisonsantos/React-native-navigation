import React,{Component} from 'react';
import {View, Text, Button} from 'react-native';

import {createBottomTabNavigator } from 'react-navigation';

//home não e uma tela mas sim um stack
//e apartir da stack  se acessa as telas


import Tela1 from './tela1';
 import Tela2 from './Tela2';

const HomeTabNavigator = createBottomTabNavigator({

    Tela1:{
      screen:Tela1
    },
    Tela2:{
      screen:Tela2
    }
  });
  

  export default HomeTabNavigator;