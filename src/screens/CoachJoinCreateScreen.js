import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const CoachJoinCreateScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.textStyle}>CoachJoinCreateScreen</Text>
      <Button
        title="Join"
        onPress={() => navigation.navigate("CoachJoinCode")}
      />
      <Button
        title="Create"
        onPress={() => navigation.navigate("CoachRegistration")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default CoachJoinCreateScreen;
