import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';


export default class HomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            driverLocation: null,
            ordersLocations: [],
            ordersLoaded: false,
        }
    }
    static navigationOptions = {
        header: null
    }

    componentDidMount(){
        this.loadOrders();
        this.loadDriverLocation()
    }
    loadDriverLocation=()=>{
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({driverLocation:{
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: .0622,
                longitudeDelta: .0421
            }})
        }, err => {console.log(err)});
    }
    
    loadOrders=()=>{
        fetch('http://192.168.1.82:3001/orders', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             },
             method: 'GET',
      
          })
        .then(res=> res.json())
        .then((data)=> {
            data.forEach(order => {
            const newOrders = [...this.state.ordersLocations, order]
            this.setState({ordersLocations: newOrders, ordersLoaded: true})
        })
    }, (error) => {
        this.setState({
            ordersLoaded: true, error
        })
    })

    }


    renderMap=()=>{
        if(this.state.driverLocation){
            return <MapView style = {styles.map}
            region = {this.state.driverLocation}>
            {this.state.ordersLocations.map(o=>(
                <MapView.Marker coordinate={o.coords}/>
            ))}
            </MapView>
        }
    }

    render(){
        return(
            <View style = {styles.mapContainer}>
                <View>
                    <Text>{this.state.ordersLocations.length}</Text>
                    <TouchableOpacity color= '#20603d' onPress={()=>{this.props.navigation.openDrawer()}}>
                        <Text style={styles.menuButton}>Menu</Text>
                    </TouchableOpacity>
                </View>
                {this.renderMap()}
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