import React,{Component} from "react"
import { View,StyleSheet,Text } from "react-native"

export default class WhoIsThatPokemon extends Component{
    render(){
        return(<View style={styles.container}>
            <View>
                <Text>How Is That Pokemon</Text>
            </View>
        </View>)
    }    
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#94e3ae",
        flex:1
    }
})