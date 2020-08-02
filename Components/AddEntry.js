import React from 'react'
import { View, Text } from 'react-native'
import { getMetricMetaInfo } from '../utils/helper'


export default class AddEntry extends React.Component {
	render() {
		return (
			<View>
				{ getMetricMetaInfo('bike').getIcon() }			
			</View>
		)
	}
}