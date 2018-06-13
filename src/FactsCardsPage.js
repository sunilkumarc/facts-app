import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Exponent from 'expo';
import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.card, { backgroundColor: this.props.backgroundColor }]}>
                <Text>{this.props.text}</Text>
            </View>
        )
    }
}

class NoMoreCards extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.noMoreCards}>
                <Text>No more cards</Text>
            </View>
        )
    }
}

export default class FactsCardsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                { text: 'In the UK, it is illegal to ear pies on Christmas!', backgroundColor: 'red' },
                { text: 'Aubergine', backgroundColor: 'purple' },
                { text: 'Courgette', backgroundColor: 'green' },
                { text: 'Blueberry', backgroundColor: 'blue' },
                { text: 'Umm...', backgroundColor: 'cyan' },
                { text: 'orange', backgroundColor: 'orange' },
            ]
        };
    }

    handleYup(card) {

    }

    handleNope(card) {

    }

    handleMaybe(card) {

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cards}>
                    <SwipeCards
                        cards={this.state.cards}
                        renderCard={(cardData) => <Card {...cardData} />}
                        renderNoMoreCards={() => <NoMoreCards />}

                        handleYup={this.handleYup}
                        handleNope={this.handleNope}
                        handleMaybe={this.handleMaybe}
                        hasMaybeAction
                        showYup={false}
                        showNope={false}
                        showMaybe={false}
                        dragY={false}
                    />
                </View>
                <View style={styles.info}>
                    <Text>Metadata about cards will come here</Text>
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
        width: '90%',
        margin: 10,
    },
    info: {
        flex: 0.2,
        backgroundColor: 'green',
        width: '100%',
    },
    noMoreCardsText: {
        fontSize: 22,
    },
    card: {
        width: 400,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
