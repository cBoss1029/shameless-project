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
    static navigationOptions = {
        header: null
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
            <View style={styles.itemsContainer}>
                <ScrollView style={styles.scrollView}>
                    <Text>{this.state.selected.length}</Text>
                    <Text style={styles.title}>Bundles</Text>
                    {this.renderBundles()}
                    <Text style={styles.title}>Add-Ons ($2 each)</Text>
                    {this.renderAddOns()}
                    <TouchableOpacity style={styles.touchableOpacity} color = '#20603d' onPress={()=>{this.props.navigation.navigate('ConfirmOrder', {cart: this.state.selected})}}>
                            <Text style={styles.text}>Continue</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    itemsContainer: {
        flex: 1,
        height: '100%'

    },
    title: {
        fontSize: 25,
        borderBottomWidth: 1,
        width: '100%',
    },
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
    touchableOpacityContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        // height: '50%',
        margin: 20,

    },
    scrollView: {
        margin: 15,
    }
})