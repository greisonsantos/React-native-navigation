import React,{Component} from 'react';

//createBottomTabNavigator
//createMaterialTopTabNavigator
//createBottomTabNavigator
import {createDrawerNavigator, createBottomTabNavigator ,createMaterialTopTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

import Login from './src/screens/Login';
 import Home from './src/screens/Home';


 //nagegação com stack navigation

//carregar todas as telas do ap
// const AppNavigator = createStackNavigator({

//     Tela1:{
//       screen:Tela1,
//       navigationOptions:{
//         title:'Tela 1',
//       }
      
//     },
//     Tela2:{
//       screen:Tela2,
//       navigationOptions:{
//         title:'Tela 2 nova',
//       }
//     }
// },{
//    defaultNavigationOptions:{
//     headerStyle:{
//       backgroundColor: 'green',
//       height:100
//    },
//    headerTintColor:'#FFFFFF',
//    headerTitleStyle:{
//        fontWeight:'normal',
//        fontSize: 40
//    }
//    }
// });

////////////////////////////////////////////////////////////////////////
//navegação com tab navigation

// const AppNavigator = createBottomTabNavigator({
//    Tela1:{
//      screen:Tela1
//    },
//    Tela2:{
//     screen:Tela2
//   }
// },{
//   defaultNavigationOptions:{
//      tabBarOptions:{
//        showIcon:false,
       
//      }
//   }
// })

//nagegação com  drawer navigator 
//similar a stack navigator porém permite abrir menu com um button

// const AppNavigator = createDrawerNavigator({
//      Tela1:{
//        screen:Tela1
//      },
//      Tela2:{
//       screen:Tela2
//     }
//   });


//também e possivel criar navegação da stack com tab

const AppNavigator = createStackNavigator({

  Login:{
    screen:Login
  },
  Home:{
    screen:Home
  }
});




const AppContainer= createAppContainer(AppNavigator);

export default AppContainer;