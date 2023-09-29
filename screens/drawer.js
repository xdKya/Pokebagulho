import React,{Component} from "react"
import { View } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "./homescreen"
import TeamCreator from "./teamcreatescreen"
import WhoIsThatPokemon from "./whoisthatpokemon"
import Pokedex from "./pokedexscreen"

const Draw = createStackNavigator()

export default class Drawer extends Component{
    render(){
        return(
            <Draw.Navigator screenOptions={{headerShown:false}}>
                <Draw.Screen name='homescreen'component={HomeScreen}/>
                <Draw.Screen name='Team Creator'component={TeamCreator}/>
                <Draw.Screen name='who is that pokemon'component={WhoIsThatPokemon}/>
                <Draw.Screen name='Pokedex'component={Pokedex}/>
            </Draw.Navigator>
        )
    }    
}