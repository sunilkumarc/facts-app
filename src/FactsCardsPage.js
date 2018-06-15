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
                <Text style={styles.cardText}>{this.props.text}</Text>
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
                { text: 'In the UK, it is illegal to ear pies on Christmas!', backgroundColor: '#274059' },
                { text: 'Aubergine', backgroundColor: '#274059' },
                { text: 'Courgette', backgroundColor: '#274059' },
                { text: 'Blueberry', backgroundColor: '#274059' },
                { text: 'Umm...', backgroundColor: '#274059' },
                { text: 'orange', backgroundColor: '#274059' },
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
                    <SwipeCards
                        cards={this.state.cards}
                        renderCard={(cardData) => <Card {...cardData} />}
                        renderNoMoreCards={() => <NoMoreCards />}
                        loop={true}
                        handleYup={this.handleYup}
                        handleNope={this.handleNope}
                        handleMaybe={this.handleMaybe}
                        hasMaybeAction
                        showYup={false}
                        showNope={false}
                        showMaybe={false}
                        dragY={false}
                    />
                <View style={styles.info}>
                    <Text></Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f364d',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cards: {
        flex: 0.85,
        width: '90%',
    },
    info: {
        flex: 0.15,
        margin: 10,
        backgroundColor: '#274059',
        width: '95%',
    },
    noMoreCardsText: {
        fontSize: 22,
    },
    card: {
        height: 400,
        width: 380,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardText: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        textAlignVertical: 'center',
        color: '#fff',
        fontSize: 20,
        lineHeight: 30,
    }
});
