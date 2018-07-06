import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


export default class ConfirmOrder extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            orderLocation: null,
        }
    }
    static navigationOptions = {
        header: null
    }
    componentDidMount(){
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({orderLocation:{
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            }})
        }, err => {console.log(err)});
    }
    render(){
        const {navigation} = this.props;
        const cartParams = navigation.getParam('cart', 'no items');
        displayCart=()=>{
            return cartParams.map((i,ind)=>{
                return <View key={ind}>
                            <Text>{i.name}</Text>
                            <Text>{i.price}</Text>
                        </View>
            });
        }
        getCartTotal=()=>{
            let totalPrice = 0;
            cartParams.forEach((i)=>{
                    totalPrice += i.price;
                
            });
            return <Text>
                    {totalPrice}
                    </Text>
        }
        
        placeOrder=()=>{
            getTotalCart=()=>{
                let totalPrice = 0;
            cartParams.forEach((i)=>{
                    totalPrice += i.price;
            });
            return totalPrice;
            };
            const coords = this.state.orderLocation;
            const items = cartParams.map((i)=>{return i.name});
            const price = getTotalCart()
           
            const order = {
                items: items,
                price: price,
                coords: coords
            };
            fetch('http://192.168.1.82:3001/orders',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(order)
            }).then(response=> response.json())
            .then(alert('Thank you for using Shameless! You will be notified when your order has been received.'))
            .catch(err=>console.log(err));
            
            this.props.navigation.navigate('Home');
        }
        return(
            <View>
                <Text>Your Order</Text>
                {displayCart()}
                <Text>Total</Text>
                {getCartTotal()}
                <TouchableOpacity style={styles.touchableOpacity} onPress={()=>{placeOrder()}}>
                    <Text style={styles.text}>Confirm and Order</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    touchableOpacity: {
        borderWidth: 1,
        borderRadius: 4,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: '100%',
        marginTop: 10,
        marginBottom: 20
        
    },
    text: {
        fontSize: 20,
    },
})