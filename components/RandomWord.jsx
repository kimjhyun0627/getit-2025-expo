import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function RandomWord() {
	const [word, setWord] = useState('');
	const [author, setAuthor] = useState('');
	const [authorProfile, setAuthorProfile] = useState('');

	useEffect(() => {
		let aborted = false; // 언마운트 후 setState 방지용 플래그

		async function load() {
			try {
				const res = await fetch(
					'https://korean-advice-open-api.vercel.app/api/advice'
				);
				if (!res.ok) throw new Error('네트워크 오류');
				const data = await res.json();
				if (!aborted) {
					setWord(data.message);
					setAuthor(data.author);
					setAuthorProfile(data.authorProfile || '');
				}
			} catch (e) {
				console.log(e.message);
			}
		}

		load();
		return () => {
			aborted = true;
		};
	}, []);

	return (
		<View style={styles.box}>
			<Text style={styles.title}>🃏 랜덤 명언</Text>
			<Text style={styles.word}>{word}</Text>
			<Text style={styles.meta}>
				{author}
				{authorProfile ? ` (${authorProfile})` : ''}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	box: { padding: 16, gap: 8 },
	title: { fontSize: 20, fontWeight: '700' },
	word: { fontSize: 16, lineHeight: 22 },
	meta: { color: '#666' },
	error: { color: 'red', padding: 16 },
});
