/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      SignIn: {
        screens: {
          SignUp: {
            screens: {
              SignInScreen: 'SignIn',
            },
          },
          Home: {
            screens: {
              HomeScreen: 'three',
            },
          },
          Display: {
            screens: {
              DisplayScreen: 'four',
            },
          },
          
          NotFound: '*',
        },
      } 
    },
  }
}
