/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Home from './src/screens/Home';
import Add from './src/screens/AddNote';

AppRegistry.registerComponent(appName, () => App);
