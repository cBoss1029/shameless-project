import React from 'react'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class DrawerContainer extends React.Component {

  _signOutAsync = async() =>{
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth'); 
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text
          onPress={() => navigation.navigate('FirstView')}
          style={styles.uglyDrawerItem}>
          Home
        </Text>
        <Text
          onPress={() => navigation.navigate('SecondView')}
          style={styles.uglyDrawerItem}>
          Payment
        </Text>
        <Text
          // onPress={() => navigation.navigate('SecondView')}
          style={styles.uglyDrawerItem}>
          Drive
        </Text>
        <Text
          onPress={() => navigation.navigate('ThirdView')}
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
  }
})