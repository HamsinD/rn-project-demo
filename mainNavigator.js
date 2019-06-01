import React from 'react';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';

import HomeContainer from './modules/iShoot/homeContainer';
import ServiceContainer from './containers/serviceContainer';
import MineContainer from './containers/mineContainer';

const mainTabNav = TabNavigator(
    {
        Home:{
            screen:HomeContainer,
            navigationOptions:{
                title:'Home'
            }
        },
        Service:{
            screen:ServiceContainer,
            navigationOptions:{
                title:'Service'
            }
        },
        Mine:{
            screen:MineContainer,
            navigationOptions:{
                title:'Mine'
            }
        }
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            activeTintColor: '#03a4ff',
            inactiveTintColor: '#575757',
            labelStyle: {
                fontSize: 12,
                paddingBottom: 5,
            },
            tabStyle: {
                borderColor: '#DADADA',
                borderRadius: 5,
            },
            style: {
                height: 50,
                backgroundColor: '#fff',
            },
        },
    }
);

export default mainTabNav;
