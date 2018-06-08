import React from "react"
import {Text, View} from "react-native";



export default class HomePage extends React.Component{

    static navigationOptions = {
        header: null,
    };

    render(){
        return(
            <View>
                <Text>HomePage</Text>
            </View>
        )
    }

}