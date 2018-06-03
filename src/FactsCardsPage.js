import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Exponent from 'expo';

export default class FactsCardsPage extends React.Component {
	render() {
        return (
            <View style={styles.container}>
                <View style={styles.cards}>
                    <Text style={styles.card}>abcd</Text>
                </View>
                <View style={styles.info}>
                    <Text>b</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
        justifyContent: 'center',
        marginTop: Exponent.Constants.statusBarHeight
    },
    cards: {
        flex: 0.8,
        backgroundColor: 'blue',
    },
    info: {
        flex: 0.2,
        backgroundColor: 'green'
    },
    card: {
        flex: 1
    }
});
