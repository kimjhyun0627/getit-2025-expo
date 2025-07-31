import { View, Text, Image, StyleSheet } from 'react-native';
import NameInput from './components/NameInput.jsx';
import Calculator from './components/Calculator.jsx';

export default function App() {
	return (
		<View style={styles.container}>
			<Calculator />
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
