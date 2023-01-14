// /**
//  * @format
//  */

// import {onAuthStateChanged} from '@firebase/auth';
// import {useState} from 'react';
// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// import {auth} from './FirebaseConfig';
// import Root from './navigation/Root';

// export default Main = () => {
  
// };

// AppRegistry.registerComponent(appName, () => Main);

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
