// In App.js in a new project

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/stack';

const App = function () {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
