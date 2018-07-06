import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation'
import HomeScreen from './HomeScreen';


export default class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordConfirm: '',
        }    
    }
    static navigationOptions = {
        header: null
    }
    confirmPassword=()=>{
        if(this.state.password === this.state.passwordConfirm){
            return true;
        } else {
            alert('Passwords do not match');
            return false;
        }
    }
    _signUpAsync = async () => {
        const tokenContents = {
            username: this.state.username,
            password: this.state.password
        }
        if(this.state.username && this.state.password && this.state.passwordConfirm){
            await AsyncStorage.setItem('userToken', `${tokenContents}`);
            this.props.navigation.navigate('App');
        } else {
            alert('Please enter a username and password');
        }
      };
    
    render(){
        const { navigation } = this.props

        return(
            <View style = {styles.container}>
                <Text style = {styles.title}>Shamless</Text>
                <TextInput style = {styles.text} onChangeText = {(text) => {this.setState({username: text})}} placeholder = 'Username'></TextInput>
                <TextInput style = {styles.text} onChangeText = {(text) => {this.setState({password: text})}} placeholder = 'Password' secureTextEntry = {true}></TextInput>
                <TextInput style = {styles.text} onChangeText = {(text) => {this.setState({passwordConfirm: text})}} placeholder = 'Confirm Password' secureTextEntry = {true}></TextInput>
                <Button containerViewStyle = {{width: '100%', margin: 0}}color = '#20603d' title = 'Sign Up' onPress = {() =>{if(this.confirmPassword()){this._signUpAsync()}}}/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3CB371',

    },
    text: {
        
        marginBottom: 10,
        height: 60,
        width: '100%',
        fontSize: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 30

    },
    buttonContainer: {
        margin: 20
    }
    
})