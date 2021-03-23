import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import CoachAthleteButton from "../components/CoachAthleteButton";

const CoachOrAthleteScreen = ({navigation}) => {
  return (
    <View style = {styles.viewStyle}>
      <Text style = {styles.textStyle}>Coach or Athlete</Text>
      <CoachAthleteButton 
      text = {"Athlete"}
      navigateto = {"AthleteJoinCode"}
      />
      <CoachAthleteButton 
      text = {"Coach"} 
      navigateto = {"CoachJoinCreate"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    bottom: 20
  },
  viewStyle: {
    top: 150,
    alignItems: 'center'
  }
});

export default CoachOrAthleteScreen;
