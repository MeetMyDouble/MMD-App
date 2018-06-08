import React from "react"
import {Text, View, AsyncStorage} from "react-native";
import {sendPostRequest} from "../../misc/Communication";



export default class SplashScreen extends React.Component{

    static navigationOptions = {
        header: null,
    };



    constructor(props){
        super(props)
    }


    async componentDidMount(){

        const token = await AsyncStorage.getItem("token");

        if (token === null) {
            this.props.navigation.navigate('LoginPage')
            return;
        }

        sendPostRequest('/authToken', {"token" : token}).then(responsejson => {
            if (responsejson.code === '0'){
                this.props.navigation.navigate('HomePage')
            }
        })

    }

    render(){
        return(
            <View>
                <Text>Splash</Text>
            </View>
        )
    }

}