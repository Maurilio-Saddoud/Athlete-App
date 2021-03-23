import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const AthleteJoinCodeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textStyle}>AthleteJoinCodeScreen</Text>
      <Button
        title="Join Team"
        onPress={() => navigation.navigate("AthleteRegistration")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default AthleteJoinCodeScreen;
