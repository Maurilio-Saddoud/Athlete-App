import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

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

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    CoachOrAthlete: CoachOrAthleteScreen,
    CoachJoinCreate: CoachJoinCreateScreen,
    AthleteJoinCode: AthleteJoinCodeScreen,
    CoachJoinCode: CoachJoinCodeScreen,
    CoachRegistration: CoachRegistrationScreen,
    CoachCreateTeam: CoachCreateTeamScreen,
    AthleteRegistration: AthleteRegistrationScreen
  }),
  athleteFlow: createBottomTabNavigator({
      AthleteQ: AthleteQScreen,
      AthleteData: AthleteDataScreen,
      AthleteSettings: AthleteSettingsScreen
  }),
  coachFlow: createBottomTabNavigator({
    CoachQ: CoachQScreen,
    TeamData: TeamDataScreen,
    CoachSettings: CoachSettingsScreen
  })
});

export default createAppContainer(switchNavigator);
