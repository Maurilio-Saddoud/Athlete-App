import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import CoachAthleteButton from "../components/CoachAthleteButton";
import Spacer from "../components/Spacer";
import { AntDesign } from "@expo/vector-icons";

const CoachOrAthleteScreen = ({ navigation }) => {
  return (
    <View style={styles.viewStyle}>
      <AntDesign
        name="left"
        size={30}
        style={{ color: "#8ecfff", marginTop: 40, position: "absolute"}}
      />
      <Spacer space={200} />
      <Text style={styles.textStyle}>Sign up as</Text>
      <Text style={styles.textStyle}>Coach or Athlete</Text>
      <Spacer space={40} />
      <CoachAthleteButton text={"Athlete"} navigateto={"AthleteJoinCode"} />
      <CoachAthleteButton text={"Coach"} navigateto={"CoachJoinCreate"} />
    </View>
  );
};

CoachOrAthleteScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontSize: 30,
    bottom: 20,
    fontFamily: "goodTimes",
  },
  viewStyle: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  spacerStyle: {
    margin: 100,
  },
});

export default CoachOrAthleteScreen;
