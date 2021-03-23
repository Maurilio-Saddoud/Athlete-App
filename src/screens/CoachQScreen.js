import React from "react";
import { View, StyleSheet, Text } from "react-native";

const CoachQScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>CoachQScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  viewStyle: {
    margin: 40,
  },
});

export default CoachQScreen;
