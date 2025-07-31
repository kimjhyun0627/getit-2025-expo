// components/Calculator.jsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';

export default function Calculator() {
	const [num1, setNum1] = useState('');
	const [num2, setNum2] = useState('');
	const [result, setResult] = useState(null);

	const calculate = () => {
		const sum = parseFloat(num1) + parseFloat(num2);
		if (isNaN(sum)) {
			Alert.alert('입력 오류', '유효한 숫자를 입력해주세요');
			return;
		}
		setResult(sum);
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				keyboardType="numeric"
				placeholder="숫자 1"
				value={num1}
				onChangeText={setNum1}
			/>
			<TextInput
				style={styles.input}
				keyboardType="numeric"
				placeholder="숫자 2"
				value={num2}
				onChangeText={setNum2}
			/>
			<Button title="더하기" onPress={calculate} />
			{result !== null && (
				<Text style={styles.result}>결과: {result}</Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 30,
	},
	input: {
		borderWidth: 1,
		borderColor: '#aaa',
		padding: 10,
		marginBottom: 10,
		borderRadius: 4,
	},
	result: {
		marginTop: 20,
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
