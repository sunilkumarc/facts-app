import {
    FactsCardsPage,
    OptionsPage
} from '../../src/'
import {
    createStackNavigator,
} from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

const MyNavigator = createStackNavigator({
    Facts: {
        screen: FactsCardsPage
    },
    Options: {
        screen: OptionsPage
    }
}, {
    headerMode: 'none',
    transitionConfig: getSlideFromRightTransition
});

export default MyNavigator;