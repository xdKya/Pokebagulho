import React,{Component} from "react"
import { View,StyleSheet,Text } from "react-native"

export default class TeamCreator extends Component{
    render(){
        return(<View style={styles.container}>
            <View>
                <Text>Team Creator</Text>
            </View>
        </View>)
    }    
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#de9a26",
        flex:1
    }
})