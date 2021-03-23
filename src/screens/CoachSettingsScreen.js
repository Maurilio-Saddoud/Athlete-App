import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const CoachSettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>CoachSettingsScreen</Text>
      <Button title="Logout" onPress={() => navigation.navigate("loginFlow")} />
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

export default CoachSettingsScreen;
