import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux'
import reducer from './reducers'
import { createStore } from 'redux'
import AddEntry from './Components/AddEntry'

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; 

class App extends React.Component {

  render() {
    return(
      <Provider store={createStore(reducer)}>
        <View>
          <AddEntry />
        </View> 
      </Provider>
    )
  }
}