import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import OneDeviceSettings from '../screens/oneDeviceSettings';
import BoardSetupStack from '../routes/boardSetupStack';

const screens = {
    OneDeviceSettings: {
        screen: OneDeviceSettings
    },
    BoardSetupStack: {
        screen: BoardSetupStack
    },
};

// home stack navigator screens
const OneDeviceStack = createStackNavigator(screens);

export default createAppContainer(OneDeviceStack);