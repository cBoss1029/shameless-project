import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Marker from 'react-native-maps'
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import Login from './components/Login';
import HomeScreen from './components/HomeScreen'
import DrawerContainer from './components/DrawerContainer';
const Stack = {
	FirstView: {
		screen: HomeScreen
	},
	SecondView: {
		screen: Login
	},

};

const DrawerRoutes = {
	FirstViewStack: {
		name: 'FirstViewStack',
		screen: StackNavigator(Stack, { initialRouteName: 'FirstView' })
	},
	SecondViewStack: {
		name: 'SecondViewStack',
		screen: StackNavigator(Stack, { initialRouteName: 'SecondView' })
	},
	
};

const RootNavigator =
	StackNavigator({
		Drawer: {
			name: 'Drawer',
			screen: DrawerNavigator(
        DrawerRoutes,
        {contentComponent: DrawerContainer},

			),
		},
		...Stack
	},
		{
			headerMode: 'none'
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
export default RootNavigator;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
