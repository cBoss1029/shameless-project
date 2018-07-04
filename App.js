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
const AppStack = {
	FirstView: {
		screen: HomeScreen
	},
	SecondView: {
		screen: PaymentPrefs
	},
	ThirdView: {
		screen: Settings
	},
	// FourthView: {
	// 	screen: Login
	// },

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
	FirstViewStack: {
		name: 'FirstViewStack',
		screen: StackNavigator(AppStack, { initialRouteName: 'FirstView' })
	},
	SecondViewStack: {
		name: 'SecondViewStack',
		screen: StackNavigator(AppStack, { initialRouteName: 'SecondView' })
	},
	ThirdViewStack: {
		name: 'ThirdViewStack',
		screen: StackNavigator(AppStack, { initialRouteName: 'ThirdView' })
	},
	// FourthViewStack: {
	// 	name: 'FourthViewStack',
	// 	screen: StackNavigator(AppStack, { initialRouteName: 'FourthView' })
	// },
	
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
// const App = createDrawerNavigator(
//   {
//   Home: {
//     screen: HomeScreen
//   },
//   Login: {
//     screen: Login
//   }
// },
// {
//   initialRouteName: 'Home',
//   contentComponent: DrawerContainer,
//   backBehavior: initialRoute
// }
// )
// export default class App extends React.Component {
//   render() {
//     return (
//       <HomeScreen/>

//     );
//   }
// }
// export default RootNavigator;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
