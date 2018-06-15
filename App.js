import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fontAssets } from './helpers';
import { FactsCardsPage } from './src';
import { 
    ThemeProvider
} from 'react-native-material-ui';

const uiTheme = {
	fontFamily: 'source_sans_pro',
};

export default class App extends React.Component {
	state = {
		fontsLoaded: false,
	}

	async componentDidMount() {
		this._loadAssetsAsync();
	}

	async _loadAssetsAsync() {
		await Promise.all(fontAssets);
		this.setState({ fontsLoaded: true });
	}
	
	render() {
		if (!this.state.fontsLoaded) {
			return (
				<View style={styles.container}>
					<Text style={styles.loadingText}>Loading Assets... </Text>
				</View>
			);
		}

		return (
			<ThemeProvider uiTheme={uiTheme}>
				<FactsCardsPage />
			</ThemeProvider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
