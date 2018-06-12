import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.title}>Shamless</Text>
                <TextInput style = {styles.text} onChangeText = {(text) => {this.setState({username: text})}} placeholder = 'Username'></TextInput>
                <TextInput style = {styles.text} onChangeText = {(text) => {this.setState({password: text})}} placeholder = 'Password' secureTextEntry = {true}></TextInput>
                <Button containerViewStyle = {{width: '100%', margin: 0}}color = '#20603d' title = 'Login' onPress = {() =>{}}/>

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