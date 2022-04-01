import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import BoardSetup1 from '../screens/BoardSetup/BoardSetup1';
import BoardSetup2 from '../screens/BoardSetup/BoardSetup2';
import BoardSetup3 from '../screens/BoardSetup/BoardSetup3';

const screens = {
    BoardSetup1: {
        screen: BoardSetup1
    },
    BoardSetup2: {
        screen: BoardSetup2
    },
    BoardSetup3: {
        screen: BoardSetup3
    },
};

// home stack navigator screens
const BoardSetupStack = createStackNavigator(screens);

export default createAppContainer(BoardSetupStack);