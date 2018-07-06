import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import products from '../products';
import BundleItem from './BundleItem';
import AddOnItem from './AddOnItem';



export default class SelectItems extends React.Component {
    constructor(){
        super();
        this.state = {
            bundles: [

            ],
            addOns: [

            ],
            selected: [

            ]
        }

    }
    componentDidMount(){
        this.loadBundles();
        this.loadAddOns();
    }

    handleSelectedItem=(item)=>{
        let selectedItems = [...this.state.selected];
        selectedItems.push(item);
        this.setState({selected: selectedItems});
    }
    handleRemoveItem=(item)=>{
        let selectedItems = [...this.state.selected];
        console.log('test')
        this.setState({selected: selectedItems.filter(i=>i!==item)});
    }

    loadBundles=()=>{
        const {bundles} = products;
        
        let bundlesArr = [...this.state.bundles];
        bundles.forEach((b,i)=>{
            bundlesArr.push(b);
            this.setState({bundles: bundlesArr})
        });
    }
    renderBundles(){
        if(this.state.bundles){
            return this.state.bundles.map((b,i)=>{
                return <BundleItem key={i} handleAdd={this.handleSelectedItem} handleRemove = {this.handleRemoveItem} name={b.name} item={b}/>
            })
        }

    }

    loadAddOns=()=>{
        const {addOns} = products;
        console.log(addOns.length);
        
        let addOnsArr = [...this.state.addOns];
        addOns.forEach((a,i)=>{
            addOnsArr.push(a);
            this.setState({addOns: addOnsArr})
        });
    }
    renderAddOns=()=>{
        if(this.state.addOns){
            return this.state.addOns.map((a,i)=>{
                return <AddOnItem key={i} handleAdd={this.handleSelectedItem} handleRemove = {this.handleRemoveItem} item={a}/>
            })
        }
    }

    render(){
        return(
            <ScrollView style={styles.itemsContainer}>
                <Text>{this.state.selected.length}</Text>
                <Text style={styles.title}>Bundles</Text>
                {this.renderBundles()}
                <Text style={styles.title}>Add-Ons</Text>
                {this.renderAddOns()}
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    itemsContainer: {
        flex: 1,

    },
    title: {
        fontSize: 25,
        borderBottomWidth: 1,
        width: '100%',
    }
})