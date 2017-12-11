import React from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { } from '../../utillities/Scale';
import Color from '../../content/color/Color';
import NotificationTopBarTitle from '../notification/NotificationTopBarTitle';
import Notification from '../notification/Notification';
import ButtonShowMenu from '../home/ButtonShowMenu';
import Job from '../job/Job';
import JobTopBarTitle from '../job/JobTopBarTitle';
import JobTopBarRight from '../job/JobTopBarRight';
import { Languages } from '../../content/languages/Languages';

const { brownBlack, black, white, } = Color;

const NotificationRouter = StackNavigator({
    NotificationScreen: {
        screen: Notification,
        navigationOptions: ({ navigation }) => ({
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
            headerLeft: <ButtonShowMenu navigation={navigation} />,
            headerRight: <Text />
        }),
    },
    JobSreen: {
        screen: Job,
        navigationOptions: () => ({
            headerTitle: <JobTopBarTitle />,
            headerTitleStyle: { alignSelf: 'center', color: white },
            headerStyle: {
                backgroundColor: brownBlack,
                shadowColor: black,
                shadowOpacity: 1,
                shadowRadius: 0,
                shadowOffset: {
                    height: 1,
                    width: 0
                },
            },
            headerRight: <JobTopBarRight color={white} />,
            headerTintColor: white
        })
    }
}, {
        initialRouteName: 'NotificationScreen'
    });

export default NotificationRouter;

