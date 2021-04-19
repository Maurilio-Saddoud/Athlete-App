import React, { useState } from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import * as Font from "expo-font";

import AppLoading from "expo-app-loading";

import SigninScreen from "./src/screens/SigninScreen";
import CoachOrAthleteScreen from "./src/screens/CoachOrAthleteScreen";
import CoachJoinCreateScreen from "./src/screens/CoachJoinCreateScreen";
import AthleteJoinCodeScreen from "./src/screens/AthleteJoinCodeScreen";
import CoachCreateTeamScreen from "./src/screens/CoachCreateTeamScreen";
import CoachJoinCodeScreen from "./src/screens/CoachJoinCodeScreen";
import AthleteRegistrationScreen from "./src/screens/AthleteRegistrationScreen";
import CoachRegistrationScreen from "./src/screens/CoachRegistrationScreen";
import AthleteQScreen from "./src/screens/AthleteQScreen";
import AthleteDataScreen from "./src/screens/AthleteDataScreen";
import AthleteSettingsScreen from "./src/screens/AthleteSettingsScreen";
import CoachQScreen from "./src/screens/CoachQScreen";
import TeamDataScreen from "./src/screens/TeamDataScreen";
import CoachSettingsScreen from "./src/screens/CoachSettingsScreen";
import ByPassScreen from "./src/screens/ByPassScreen";

const fetchFont = () => {
  return Font.loadAsync({
    abnes: require("./assets/fonts/abnes.ttf"),
    goodTimes: require("./assets/fonts/good-times-rg.ttf"),
    papyrus: require("./assets/fonts/papyrus.ttf"),
  });
};

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    ByPass: ByPassScreen,
    Signin: SigninScreen,
    CoachOrAthlete: CoachOrAthleteScreen,
    CoachJoinCreate: CoachJoinCreateScreen,
    AthleteJoinCode: AthleteJoinCodeScreen,
    CoachJoinCode: CoachJoinCodeScreen,
    CoachRegistration: CoachRegistrationScreen,
    CoachCreateTeam: CoachCreateTeamScreen,
    AthleteRegistration: AthleteRegistrationScreen,
  }),
  athleteFlow: createBottomTabNavigator({
    AthleteData: AthleteDataScreen,
    AthleteQ: AthleteQScreen,
    AthleteSettings: AthleteSettingsScreen,
  }),
  coachFlow: createBottomTabNavigator({
    TeamData: TeamDataScreen,
    CoachQ: CoachQScreen,
    CoachSettings: CoachSettingsScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onError={() => console.log("ERROR")}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }
  return <App />;
};
