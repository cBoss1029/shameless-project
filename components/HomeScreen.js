import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';


export default class HomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userLocation: null,
        }
    }
    static navigationOptions = {
        header: null
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position)
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
                <View>
                    <TouchableOpacity color= '#20603d' onPress={()=>{this.props.navigation.openDrawer()}}>
                        <Text style={styles.menuButton}>Menu</Text>
                    </TouchableOpacity>
                </View>
                {this.renderMap()}
                <Button style = {styles.button} title = 'Place Order' color = '#20603d'onPress = {()=>{this.props.navigation.navigate('SelectItems')}}/>
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
        height: "85%",
        zIndex: -1,
    },
    button: {
        zIndex: 10,
        position: 'absolute',
        top: 10,
        left: 10,
        width: '100%',
        height: '10%'  

    },
    menuButton: {
        width: '20%',
        fontSize: 25,
        zIndex: 2,
        borderWidth: 1,
    }
})