// App.jsx
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import RandomWord from './components/RandomWord';
import Timer from './components/Timer';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Timer />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#f0f0f0',
	},
});
