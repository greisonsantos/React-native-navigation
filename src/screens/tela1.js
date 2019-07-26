import React,{Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Tela1 extends Component{

    // static navigationOptions={
    //    title:"Tela 1",

    // };

    render(){

        return(
            <View>
                <Text> 
                    tela 1
                </Text>

                <Button title="Menu"
                 onPress={()=> {this.props.navigation.toggleDrawer()}}
                /> 
                <Button title="Redirecionar"
                 onPress={()=> this.props.navigation.navigate('Tela2',{nome:'greison'})}
                />
            </View>
        );
    }
}