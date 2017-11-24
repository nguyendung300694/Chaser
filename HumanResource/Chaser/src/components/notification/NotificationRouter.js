import React from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { } from '../../utillities/Scale';
import Color from '../../content/color/Color';
import NotificationTopBarTitle from '../notification/NotificationTopBarTitle';
import Notification from '../notification/Notification';
import { Languages } from '../../content/languages/Languages';

const { brownBlack, black } = Color;

const NotificationRouter = StackNavigator({
    NotificationScreen: {
        screen: Notification,
        navigationOptions: () => ({
            headerTitle: <NotificationTopBarTitle />,
            headerStyle: {
                backgroundColor: brownBlack,
                shadowColor: black,
                shadowOpacity: 1,
                shadowRadius: 0,
                shadowOffset: {
                    height: 1,
                    width: 0
                }
            },
        })
    },
}, {
        initialRouteName: 'NotificationScreen'
    });

export default NotificationRouter;

