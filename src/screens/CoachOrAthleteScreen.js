import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const CoachOrAthleteScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.textStyle}>CoachOrAthleteScreen</Text>
      <Button
        title="Coach"
        onPress={() => navigation.navigate("CoachJoinCreate")}
      />
      <Button
        title="Athlete"
        onPress={() => navigation.navigate("AthleteJoinCode")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default CoachOrAthleteScreen;
