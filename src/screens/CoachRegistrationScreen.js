import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const CoachRegistrationScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textStyle}>CoachRegistrationScreen</Text>
      <Button
        title="Register & Create Team"
        onPress={() => navigation.navigate("CoachCreateTeam")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default CoachRegistrationScreen;
