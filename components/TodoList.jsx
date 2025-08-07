// components/TodoList.jsx
import React from 'react';
import { FlatList } from 'react-native';
import TodoItem from './TodoItem';

export default function TodoList({ data, onRemove }) {
	return (
		<FlatList
			data={data}
			renderItem={({ item }) => (
				<TodoItem item={item} onRemove={onRemove} />
			)}
			keyExtractor={(item) => item.id}
		/>
	);
}
