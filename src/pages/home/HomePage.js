import React from "react"
import {Text, View, Dimensions, StyleSheet, Image} from "react-native";
import TabNavigator from "react-native-tab-navigator"
import ProfilePage from "../profile/ProfilePage";
import UploadPage from "../upload/UploadPage";
import SocialPage from "../social/SocialPage";

const screenDim = Dimensions.get("window");
const imageSize = screenDim.height / 30
const tabBarHeight = screenDim.height / 12


export default class HomePage extends React.Component{

    static navigationOptions = {
        header: null,
    };

    constructor(props){
        super(props)

        this.state = {selected : "profile"}
    }

    render(){
        return(
            <View style={{flex : 1}}>
                <TabNavigator tabBarStyle={styles.tabbarstyle}>

                    <TabNavigator.Item
                        selected={this.state.selected === 'profile'}
                        title="Profil"
                        selectedTitleStyle={styles.selectedTitleStyle}
                        titleStyle={styles.titleStyle}
                        renderIcon={() => <Image style={{width : imageSize, height: imageSize}} source={require('../../../resources/unselectedprofile.png')} />}
                        renderSelectedIcon={() => <Image style={{width : imageSize, height: imageSize}} source={require("../../../resources/selectedprofile.png")} />}
                        onPress={() => this.setState({selected : "profile"})}>
                        <ProfilePage navigation={this.props.navigation}/>
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selected === 'upload'}
                        title="Upload"
                        selectedTitleStyle={styles.selectedTitleStyle}
                        titleStyle={styles.titleStyle}
                        renderIcon={() => <Image style={{width : imageSize, height: imageSize}} source={require('../../../resources/unselectedupload.png')} />}
                        renderSelectedIcon={() => <Image style={{width : imageSize, height: imageSize}} source={require("../../../resources/selectedupload.png")} />}
                        onPress={() => this.setState({selected : "upload"})}>
                        <UploadPage navigation={this.props.navigation}/>
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selected === 'social'}
                        title="Social"
                        selectedTitleStyle={styles.selectedTitleStyle}
                        titleStyle={styles.titleStyle}
                        renderIcon={() => <Image style={{width : imageSize, height: imageSize}} source={require('../../../resources/unselectedchat.png')} />}
                        renderSelectedIcon={() => <Image style={{width : imageSize, height: imageSize}} source={require("../../../resources/selectedchat.png")} />}
                        onPress={() => this.setState({selected : "social"})}>
                        <SocialPage navigation={this.props.navigation}/>
                    </TabNavigator.Item>

                </TabNavigator>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    tabbarstyle: {
        height: tabBarHeight,
        backgroundColor: "white",
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 0,
        elevation: 2,
    },
    selectedTitleStyle : {
        color: "black",
        fontSize : screenDim.height / 65,
        marginBottom: screenDim.height / 80
    },
    titleStyle : {
        color: "#969faa",
        fontSize : screenDim.height / 65,
        marginBottom: screenDim.height / 80
    }
})