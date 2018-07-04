import React from 'react';
import {View, ActivityIndicator, StyleSheet, AsyncStorage} from 'react-native';


export default class AuthLoadingScreen extends React.Component{
    constructor() {
        super();
        this._bootstrapAsync();
    }
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    
    }
    render() {
        return(
            <View style= {styles.container}>
                <ActivityIndicator/>
            </View>
        )
    }
    
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
    });
