import React, { Component } from 'react';
import {createStackNavigator} from "react-navigation";
import SplashScreen from "./src/pages/splashscreen/SplashScreen";
import LoginPage from "./src/pages/login/LoginPage";
import HomePage from "./src/pages/home/HomePage";
import CameraPage from "./src/pages/camera/CameraPage";


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <RootStack/>
    );
  }
}

const RootStack = createStackNavigator(
    {

        Splash : SplashScreen,
        LoginPage,
        HomePage,
        CameraPage

    },
    {
    initialRouteName: 'Splash',
    });

