import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { getMetricMetaInfo, timeToString } from './utils/helper'

import AddEntry from './Components/AddEntry'
import UdaciSlider from './Components/UdaciSlider'
import UdaciStepper from './Components/UdaciStepper'
import DateHeader from './Components/DateHeader'
import TextButton from './Components/TextButton'

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; 


function SubmitBtn ({onPress}) {
  return(
    <TouchableOpacity 
      onPress={onPress}>
      <Text>Submit</Text>
    </TouchableOpacity>
  )
}

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

  slide = (metric, value) => {
    this.setState({
      [metric]: value,
    })
  }

  submit = () => {
    const key = timeToString();
    const entry = this.state;

    // Update Redux

    this.setState({
      run: 0,
      swim: 0,
      bike: 0,
      sleep: 0,
      eat: 0,
    })
    // Navigate to Home

    // Save to database 

    // Clear the local notification
  }

  reset = () => {
    const key = timeToString()

    // Update Redux

    // Update Db

    // Route to home
  }

  render() {
    const metrics = getMetricMetaInfo();

    if (true) {
      return(
        <View>
          <MaterialCommunityIcons name="emoticon-happy-outline" size={100} color="black" />
          <Text> You're information for today is already logged </Text>
          <TextButton children={'Reset'} onPress={this.reset}/>
        </View>
      )
    }

    return (
      <View>
        <DateHeader date={(new Date()).toLocaleDateString()}/>
        <Text>{JSON.stringify(this.state)}</Text>
        {Object.keys(metrics).map((key) => {
          const { getIcon, type, ...rest} = metrics[key];
          const value = this.state[key]


          return(
            <View key={key}>
              {getIcon()}
              {type === 'slider' ?
              <UdaciSlider
                value = {value}
                onChange={(value) => this.slide(key, value)}
                {...rest}
              /> :
              <UdaciStepper 
                value={value}
                onIncrement = {() => this.increment(key)}
                onDecrement = {() => this.decrement(key)}
                {...rest}
              />              
              }

            </View>          
          )
        })}
        <SubmitBtn onPress={this.submit}/>
      </View>
    )
  }
}