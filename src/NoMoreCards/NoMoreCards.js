import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';
import {
    Card
} from 'react-native-material-ui';

export default class NoMoreCards extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card style={{ container: styles.card}}>
                <Text style={styles.cardText}>You are all read today.</Text>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        width: '90%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#274059',
        padding: 15,
        marginTop: 10,
    },
    cardText: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#fff',
        fontSize: 25,
        lineHeight: 30,
        fontFamily: 'source_sans_pro_bold',
    },
});