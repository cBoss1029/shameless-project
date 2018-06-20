import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import MapView from 'react-native-maps';


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
        }, err => {console.log(err)});
    }

    renderMap=()=>{
        if(this.state.userLocation){
            return <MapView style = {styles.map}
            region = {this.state.userLocation}>
            <MapView.Marker coordinate = {this.state.userLocation}
            title = 'you are here'/>
            </MapView>
        }
    }

    render(){
        return(
            <View style = {styles.mapContainer}>
                {this.renderMap()}
                <Button style = {styles.button} title = 'Place Order' color = '#20603d'onPress = {()=>{}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mapContainer: {
        flex: 1,
    },
    map: {
        width: "100%",
        height: "90%",
        zIndex: -1,
    },
    button: {
        zIndex: 10,
        position: 'absolute',
        top: 10,
        left: 10,
        width: '100%',
        height: '10%'
        

    }
})