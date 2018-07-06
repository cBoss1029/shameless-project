import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


export default class ConfirmOrder extends React.Component{
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        header: null
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
        return(
            <View>
                <Text>Your Order</Text>
                {displayCart()}
                <Text>Total</Text>
                {getCartTotal()}
                <TouchableOpacity style={styles.touchableOpacity} onPress={()=>{}}>
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