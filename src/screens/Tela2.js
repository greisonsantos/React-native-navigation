import React,{Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Tela2 extends Component{

    static navigationOptions={
        title:"Tela 2",
        // tabBarOptions:{
            
        //       tabStyle:{
        //    backgroundColor:'green'
        //       }
        // }
     };


 
    render(){

        return(
            <View>
                <Text> 
                    tela 2
                </Text>
                <Text> Nome: {this.props.navigation.getParam('nome', 'default')}</Text>
                <Button title="Voltar"
                 onPress={()=> this.props.navigation.goBack()}
                />
            </View>
        );
    }
}