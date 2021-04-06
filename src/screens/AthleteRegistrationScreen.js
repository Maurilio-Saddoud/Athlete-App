import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import RegistrationForm from "../components/RegistrationForm";

const AthleteRegistrationScreen = ({ navigation }) => {
  return (
      <View>
      <RegistrationForm />
      <Button title="Register" onPress={() => navigation.navigate("AthleteQ")} />
      </View>
  )
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  viewStyle: {
    margin: 40
  }
});

export default AthleteRegistrationScreen;
