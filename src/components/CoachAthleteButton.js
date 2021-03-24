import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

const CoachAthleteButton = ({ text, navigateto, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(navigateto)}>
      <View style={styles.buttonStyle}>
        <Text style={styles.textStyle}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    height: 100,
    width: 200,
    borderColor: "black",
    backgroundColor: "#8ecfff",
    marginBottom: 30,
    borderRadius: 50
  },
  textStyle: {
    alignSelf: "center",
    top: 40,
    fontWeight: "bold",
    color: "white",
  },
});

export default withNavigation(CoachAthleteButton);
