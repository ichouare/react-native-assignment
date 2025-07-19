import { registerRootComponent } from 'expo';

import App from './App';
// Import the global.css file in the index.js file:


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
