import React from 'react'
import { View, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

export default function Main() {
  return <MapView style={styles.map} />
}

const styles = StyleSheet.create({
	map: {
		flex: 1
	},
})