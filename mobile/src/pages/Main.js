import React, { useEffect, useState } from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

export default function Main({ navigation }) {
	const [currentRegion, setCurrentRegion] = useState(null)

	useEffect(() => {
		async function loadInitialPosition() {
			// Desestruturação de um objeto **conceito inportante
			const { granted } = await requestPermissionsAsync()
			if (granted) {
				const location = await getCurrentPositionAsync({
					enableHighAccuracy: true,
				})

				const { latitude, longitude } = location.coords

				setCurrentRegion({
					latitude,
					longitude,
					latitudeDelta: 0.04,
					longitudeDelta: 0.04,
				})
			}
		}

		loadInitialPosition()
	}, [])

	if (!currentRegion) return null

  return (
		<MapView initialRegion={currentRegion} style={styles.map}>
			<Marker coordinate={{ latitude: -23.2750818, longitude: -45.9367478 }}>
				<Image style={styles.avatar} source={{ uri: 'https://avatars3.githubusercontent.com/u/23743072?s=460&v=4' }} />
				<Callout style={styles.callout} onPress={() => {
					// Navegação para página do GitHub
					navigation.navigate('Profile', { github_username: 'nicolaslima321' })
				}}>
					<Text style={styles.devName}>Nicolas Lima</Text>
					<Text style={styles.devBio}>Web Developer, student of computer engineering at Universidade do Vale do Paraíba</Text>
					<Text style={styles.devTechs}>PHP, Laravel, JavaScript, VueJS</Text>
				</Callout>
			</Marker>
		</MapView>
	)
}

const styles = StyleSheet.create({
	map: {
		flex: 1
	},

	avatar: {
		width: 54,
		height: 54,
		borderRadius: 4,
		borderWidth: 4,
		borderColor: '#FFF'
	},

	callout: {
		width: 260
	},

	devName: {
		fontWeight: 'bold',
		fontSize: 16
	},

	devTechs: {
		marginTop: 5
	}
})