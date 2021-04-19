import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { firebase } from '../../firebase/config';

const AthleteQScreen = () => {
  const user = firebase.auth().currentUser;
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>AthleteQScreen</Text>
      <Text>Welcome {user.displayName}</Text>
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

export default AthleteQScreen;
