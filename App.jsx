// App.jsx
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default function App() {
	const [tasks, setTasks] = useState([]);

	const addTask = (text) => {
		setTasks((prev) => [
			{ id: Date.now().toString(), text, done: false },
			...prev,
		]);
	};

	const removeTask = (id) => {
		setTasks((prev) => prev.filter((item) => item.id !== id));
	};

	return (
		<SafeAreaView style={styles.container}>
			<TodoInput onAdd={addTask} />
			<TodoList data={tasks} onRemove={removeTask} />
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
