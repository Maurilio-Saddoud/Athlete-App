import React from "react";
import { View, StyleSheet, Text } from "react-native";

const AthleteQScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>AthleteQScreen</Text>
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

export default AthleteQScreen;
