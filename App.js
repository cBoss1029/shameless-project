import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Marker from 'react-native-maps'
import {StackNavigator, DrawerNavigator, SwitchNavigator} from 'react-navigation';
import SignIn from './components/SignIn';
import HomeScreen from './components/HomeScreen';
import SignUp from './components/SignUp';
import PaymentPrefs from './components/PaymentPrefs';
import Settings from './components/Settings';
import DrawerContainer from './components/DrawerContainer';
import AuthLoadingScreen from './components/AuthLoadingScreen';
import SelectItems from './components/SelectItems';

const AppStack = {
	Home: {
		screen: HomeScreen
	},
	Payment: {
		screen: PaymentPrefs
	},
	Settings: {
		screen: Settings
	},
	SelectItems: {
		screen: SelectItems
	},

};
const AuthStack = StackNavigator({
	SignIn: {
		screen: SignIn
	},
	SignUp: {
		screen: SignUp
	}
})

const DrawerRoutes = {
	HomeStack: {
		name: 'HomeStack',
		screen: StackNavigator(AppStack, { initialRouteName: 'Home' })
	},
	PaymentStack: {
		name: 'PaymentStack',
		screen: StackNavigator(AppStack, { initialRouteName: 'Payment' })
	},
	SettingsStack: {
		name: 'SettingsStack',
		screen: StackNavigator(AppStack, { initialRouteName: 'Settings' })
	},
	
};

const AppNavigator =
	StackNavigator({
		Drawer: {
			name: 'Drawer',
			screen: DrawerNavigator(
        	DrawerRoutes,
			{contentComponent: DrawerContainer},
			),
		},
		...AppStack
	},
		{
			headerMode: 'none'
		}
	);
	export default SwitchNavigator({
		AuthLoading: AuthLoadingScreen,
		App: AppNavigator,
		Auth: AuthStack
	},
	{
		initialRouteName: 'AuthLoading',
	}
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
