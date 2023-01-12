/**
 * @format
 */

import {onAuthStateChanged} from '@firebase/auth';
import {useState} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {auth} from './FirebaseConfig';
import Root from './navigation/Root';

export default Main = () => {
  const [authenticated, setAuthenticated] = useState(false);
  onAuthStateChanged(auth, user => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  });
  return authenticated ? <App /> : <Root />;
};

AppRegistry.registerComponent(appName, () => Main);
