import { View, Text, Image, StyleSheet } from 'react-native';
import FoodItem from './src/components/FoodItem.jsx';

export default function App() {
	const foods = ['김치찌개', '치킨', '피자', '떡볶이', '초밥'];

	return (
		<View style={styles.container}>
			{foods.map((food, index) => (
				<FoodItem key={index} food={food} />
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
		backgroundColor: '#f0f0f0',
	},
	image: {
		width: 150,
		height: 150,
		borderRadius: 75,
		marginBottom: 20,
	},
	name: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	description: {
		fontSize: 16,
		color: 'gray',
	},
});
