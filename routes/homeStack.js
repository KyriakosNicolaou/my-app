import { createDrawerNavigator } from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import LoadGame from '../screens/loadGame';
import MultyDeviceSettings from '../screens/multyDeviceSettings';
import Walkthrough from '../screens/walkthrough';
import oneDeviceStack from '../routes/oneDeviceStack';
import boardSetupStack from '../routes/boardSetupStack';

const screens = {
    Home: {
        screen: Home
    },
    LoadGame: {
        screen: LoadGame
    },
    MultyDeviceSettings: {
        screen: MultyDeviceSettings
    },
 
    Walkthrough: {
        screen: Walkthrough
    }
};

// home stack navigator screens
const HomeStack = createDrawerNavigator(screens);

export default createAppContainer(HomeStack);