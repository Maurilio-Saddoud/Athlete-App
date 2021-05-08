import React from "react";
import { View, StyleSheet, Text } from "react-native";

const AthleteDataScreen = ({navigation }) => {
  return (
    <View>
      <Text style={styles.textStyle}>Athlete Data Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    margin: 40,
  },
});

export default AthleteDataScreen;
