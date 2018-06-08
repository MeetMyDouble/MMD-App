import React from "react"
import {Text, View, BackHandler, TextInput, Button, AsyncStorage} from "react-native";
import {sendPostRequest} from "../../misc/Communication";



export default class LoginPage extends React.Component{

    static navigationOptions = {
        header: null,
    };

    constructor(props){
        super(props);

        this.email = "";
        this.password = ""
    }

    onEmailChanged(email){
        this.email = email;
    }

    onPasswordChanged(password){
        this.password = password;
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }


    handleBackButton() {
        return true;
    }

    onSubmit(){

        console.log(this.email)
        console.log(this.password)

        sendPostRequest('/login', {'email' : this.email, 'password' : this.password})
            .then( async response => {
                if (response.code === "0"){
                    await AsyncStorage.setItem("token", response.token)
                    this.props.navigation.navigate('HomePage')
                }
            })
    }

    render(){
        return(
            <View>
                <TextInput onChangeText={(text) => {this.onEmailChanged(text)}}
                           placeholder={"email"}
                           keyboardType={'email-address'}

                />
                <TextInput onChangeText={(text) => {this.onPasswordChanged(text)}}
                placeholder={"password"}/>
                <Button label={"Submit"} title={"Submit"} onPress={() => {this.onSubmit()}}/>

            </View>
        )
    }

}