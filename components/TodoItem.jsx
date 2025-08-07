// components/TodoItem.jsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TodoItem({ item, onRemove }) {
	return (
		<View style={styles.itemContainer}>
			<Text style={styles.itemText}>{item.text}</Text>
			<TouchableOpacity onPress={() => onRemove(item.id)}>
				<Text style={styles.delete}>삭제</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	itemContainer: {
		flexDirection: 'row',
		padding: 12,
		borderBottomWidth: 1,
		borderColor: '#ddd',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	itemText: {
		fontSize: 18,
	},
	delete: {
		color: 'red',
		fontSize: 14,
	},
});
