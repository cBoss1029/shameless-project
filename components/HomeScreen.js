import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import MapView from 'react-native-maps'

export default class HomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userLocation: null,
        }
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({userLocation:{
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: .0622,
                longitudeDelta: .0421
            }})
        }, err => {console.log(err)})
    }

    render(){
        return(
            <View style = {styles.mapContainer}>
                <MapView 
                style = {styles.map}
                region = {this.state.userLocation}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: '100%'
    },
    map: {
        width: '100%',
        height: '100%'
    }
})