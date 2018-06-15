import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import { 
    Card
} from 'react-native-material-ui';

class MyCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card style={{ container: styles.card}}>
                <Text style={styles.cardText}>{this.props.text}</Text>
            </Card>
        )
    }
}

class NoMoreCards extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card style={{ container: styles.card}}>
                <Text style={styles.cardText}>No more cards today.</Text>
            </Card>
        )
    }
}

export default class FactsCardsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                { text: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside'},
                { text: 'In the UK, it is illegal to ear pies on Christmas!'},
                { text: 'Samsung tests phone durability with a butt-shaped robot.'},
                { text: 'McDonald’s once made bubblegum-flavored broccoli.'},
                { text: 'Some fungi create zombies, then control their minds.'},
                { text: 'The first oranges weren’t orange...'},
                { text: 'Scotland has 421 words for “snow”.'},
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
                <View
                    style={styles.swipeCardsContainer}>
                    <SwipeCards
                        cards={this.state.cards}
                        renderCard={(cardData) => <MyCard {...cardData} />}
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
                    <Text style={{fontFamily: 'roboto_bold'}}></Text>
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
    swipeCardsContainer: {
        flex: 0.80,
        width: '100%',
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
        width: '90%',
        height: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#274059',
        padding: 15,
        marginTop: 40,
    },
    cardText: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#fff',
        fontSize: 25,
        lineHeight: 30,
        fontFamily: 'source_sans_pro_bold',
    }
});