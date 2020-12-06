import React from 'react';
import {BottomTabNav} from './src';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/state/store';


class App extends React.PureComponent{
  render(){
    return(
      <Provider store={store}>
        <NavigationContainer>
          <BottomTabNav/>
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App;