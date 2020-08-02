import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { getMetricMetaInfo } from './utils/helper'

import AddEntry from './Components/AddEntry'

export default class App extends React.Component { 

  state = {
    run: 0,
    swim: 0,
    bike: 0,
    sleep: 0,
    eat: 0,
  }

  increment = metric => {
    const { max, step} = getMetricMetaInfo(metric);

    this.setState(prevState => {
      const count = prevState[metric] + step;

      return {
        ...prevState,
        [metric] : count > max ? max : count
      }
    })
  }

  decrement = metric => {
    const { step} = getMetricMetaInfo(metric);

    this.setState(prevState => {
      const count = prevState[metric] - step;

      return {
        ...prevState,
        [metric] : count < 0 ? 0 : count
      }
    })
  }

  slide = (value, metric) => {
    this.setState(() => ({
      [metric]: value,
    }))
  }

  render() {

    const metrics = getMetricMetaInfo();

    return (
      <View>
        {Object.keys(metrics).map((key) => {
          const { getIcon, type, ...rest} = metrics[key];
          const value = this.state[key]

          
          return(
            <View key={key}>
              {getIcon()}
            </View>          
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
