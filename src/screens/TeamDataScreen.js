import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { firebase } from '../../firebase/config';

const TeamDataScreen = () => {
  const user = firebase.auth().currentUser;


  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>TeamDataScreen</Text>
      <Text>Hello {user["displayName"]} !</Text>
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

export default TeamDataScreen;
