import React from 'react'
import { StyleSheet, Text, View, AsyncStorage, Switch } from 'react-native'

export default class DrawerContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      driverToggle: false,

    }
  }

  _signOutAsync = async() =>{
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth'); 
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text
          onPress={() => navigation.navigate('Home')}
          style={styles.uglyDrawerItem}>
          Home
        </Text>
        <Text
          onPress={() => navigation.navigate('Payment')}
          style={styles.uglyDrawerItem}>
          Payment
        </Text>
        <View style={styles.toggleItem}>
          <Text style={styles.toggleItemText}>Drive</Text>
          <Switch value={this.state.driverToggle} onValueChange={()=>{this.setState({
            driverToggle: !this.state.driverToggle
          })}}/>
        </View>
        <Text
          onPress={() => navigation.navigate('Settings')}
          style={styles.uglyDrawerItem}>
          Settings
        </Text>
        <Text
          onPress={() => this._signOutAsync()}
          style={styles.uglyDrawerItem}>
          Sign Out
        </Text>
           
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  uglyDrawerItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E73536',
    padding: 15,
    margin: 5,
    borderRadius: 2,
    borderColor: '#E73536',
    borderWidth: 1,
    textAlign: 'center'
  },
  toggleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    margin: 5,
    borderRadius: 2,
    borderColor: '#E73536',
    borderWidth: 1,
  },
  toggleItemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E73536',

  }
})