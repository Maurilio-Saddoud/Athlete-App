import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const CoachJoinCodeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.textStyle}>CoachJoinCodeScreen</Text>
      <Button 
      title="Join Team" 
      onPress={() => navigation.navigate("coachFlow")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default CoachJoinCodeScreen;
