/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  SignIn: undefined;
};

export type BottomTabParamList = {
  SignUp: undefined;
  Home: undefined;
  Display: undefined;
};

export type TabOneParamList = {
  TabOneScreen: 'SignIn';
};

export type TabTwoParamList = {
  TabTwoScreen: 'SignUp';
};

export type TabThreeParamList = {
  TabThreeScreen: 'Home';
};

export type TabFourParamList = {
  TabFourScreen: 'Display';
};