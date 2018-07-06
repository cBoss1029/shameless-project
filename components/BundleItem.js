import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, CheckBox} from 'react-native';

export default class BundleItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isSelected: false,
        }
    }
    handleCheck=()=>{
        if(!this.state.isSelected){
            this.props.handleAdd(this.props.item);
            this.setState({isSelected: true})
        } else if (this.state.isSelected){
            this.props.handleRemove(this.props.item);
            this.setState({isSelected:false});
        }
    }
  
    
    render(){
        const item=this.props.item;
        return(
            <View>
                <Text>{item.name}</Text>
                <Text>${item.price}</Text>
                <CheckBox value={this.state.isSelected} onChange={()=>{this.handleCheck()}}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        borderBottomWidth: 1,
        width: '100%',


    }
})