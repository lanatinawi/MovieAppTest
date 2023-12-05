/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MobileDev from '../MobileDev';

AppRegistry.registerComponent('MobileDev', () => MobileDev);
export const theme = {
    background: '#eab308',
    text: '#eab308'
 }
 export const styles = {
    text: {color: theme.text},
    background: {backgroundColor: theme.background}
 }
