import React from 'react'
import { View, Text, Slider } from 'react-native'

export default function UdaciSlider({max, value, unit, step, onChange}) {
	return (
		<View>
			<Slider 
				value={value}				
				minmumValue={0}
				maximumValue={max}
				step={step}
				onValueChange={onChange}
			/>
			<View>
				<Text> {value} </Text>
				<Text> {unit} </Text>
			</View>	
		</View>
	)	
}