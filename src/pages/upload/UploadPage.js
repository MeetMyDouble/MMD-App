import React from "react"
import {Text, View, TouchableOpacity} from "react-native";



export default class UploadPage extends React.Component{




    render(){
        return(
            <View>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('CameraPage')}}>
                    <Text>Prendre une photo</Text>
                </TouchableOpacity>
            </View>
        )
    }

}