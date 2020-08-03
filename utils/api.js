import { AsyncStorage } from 'react-native'
import { CALENDAR_STORAGE_KEY } from './utils/_calender'

export function submitEntry({entry, key}) {
	// Add the entry to the Asyncstorage
	return Asyncstorage.mergeItem(CALENDAR_STORAGE_KEY,JSON.stringify({
		[key]: entry,
	}))
}

export function removeEntry(key) {
	// Remove the entry at key from the Async Storage
	return Asyncstorage.getItem(CALENDAR_STORAGE_KEY).
	then((results) => {
		const data = JSON.parse(results)
		data[key] = undefined
		delete data[key]
		Asyncstorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
	})
}