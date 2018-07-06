import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, AsyncStorage, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation'
import HomeScreen from './HomeScreen';


export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }    
    }
    static navigationOptions = {
        header: null
    }
    _signInAsync = async () => {
        const tokenContents = {
            username: this.state.username,
            password: this.state.password
        }
        if(this.state.username && this.state.password){
            await AsyncStorage.setItem('userToken', `${tokenContents}`);
            this.props.navigation.navigate('App');
        } else {
            alert('Please enter username and password');
        }
      };
    render(){
        const { navigation } = this.props

        return(
            <View style = {styles.container}>
                <Text style = {styles.title}>Shamless</Text>
                <TextInput style = {styles.textInput} onChangeText = {(text) => {this.setState({username: text})}} placeholder = 'Username'></TextInput>
                <TextInput style = {styles.textInput} onChangeText = {(text) => {this.setState({password: text})}} placeholder = 'Password' secureTextEntry = {true}></TextInput>
                <View className='buttonsContainer' style={styles.touchableOpacityContainer}>
                    <TouchableOpacity style = {styles.touchableOpacity} color = '#20603d' onPress = {() =>{this._signInAsync()}}>
                        <Text style={styles.text}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.touchableOpacity} color = '#20603d' onPress = {() =>{this.props.navigation.navigate('SignUp')}}>
                        <Text style={styles.text}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
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
        height: '100%'

    },
    textInput: {
        
        marginBottom: 10,
        height: 60,
        width: '100%',
        fontSize: 25
    },
    text: {
        fontSize: 20,

    },
    title: {
        fontSize: 30,
        marginBottom: 30,
        marginTop: '30%'

    },
    touchableOpacityContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        // height: '50%',
        margin: 20,

    },
    touchableOpacity: {
        borderWidth: 1,
        borderRadius: 4,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        
    }
    
})