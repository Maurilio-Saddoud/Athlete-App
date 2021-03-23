import React from "react";
import { View, StyleSheet, Text } from "react-native";

const TeamDataScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>TeamDataScreen</Text>
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

export default TeamDataScreen;
