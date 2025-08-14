import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Timer() {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const id = setInterval(() => setSeconds((s) => s + 1), 1000);
		return () => clearInterval(id); // cleanup 필수
	}, []);

	return (
		<View style={styles.box}>
			<Text style={styles.txt}>⏰ 경과 시간: {seconds}초</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	box: { padding: 16, alignItems: 'center' },
	txt: { fontSize: 18, fontWeight: '600' },
});
