import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const AthleteRegistrationScreen = ({ navigation }) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>AthleteRegistrationScreen</Text>
      <Button title="Register" onPress={() => navigation.navigate("athleteFlow")} />
    </View>
  );
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
