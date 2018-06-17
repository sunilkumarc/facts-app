import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import {
    Card
} from 'react-native-material-ui';


export default class OptionsPage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerBar}>
                </View>
                <View style={styles.categories}>
                    <Card 
                        style={{ container: styles.eachCategory}}
                        onPress={() => this.props.navigation.navigate('Facts')}>
                        <Text style={styles.cardText}>Facts</Text>
                    </Card>
                    <Card style={{ container: styles.eachCategory}}>
                        <Text style={styles.cardText}>Sadhguru Quotes</Text>
                    </Card>
                    <Card style={{ container: styles.eachCategory}}>
                        <Text style={styles.cardText}>Inspirations Quotes</Text>
                    </Card>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f364d',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerBar: {
        flex: 0.15,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#274059'
    },
    categories: {
        flex: 0.85,
        width: '100%',
        flexDirection: 'row',
    },
    eachCategory: {
        flex: 0.33,
        height: '20%',
        marginTop: 20,
        marginLeft: 15,
        backgroundColor: '#274059',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    cardText: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'roboto_bold'
    }
});