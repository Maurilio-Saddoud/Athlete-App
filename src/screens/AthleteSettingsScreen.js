import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const AthleteSettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>AthleteSettingsScreen</Text>
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

export default AthleteSettingsScreen;
