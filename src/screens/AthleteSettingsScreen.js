import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import {firebase } from '../../firebase/config';

const AthleteSettingsScreen = ({ navigation }) => {
  const onLogOutPress = () => {
    firebase.auth().signOut()
    .then(() => {
      navigation.navigate("loginFlow");
    }).catch((error) => {
        Alert.alert("Logout Failed");
    })
  }
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>AthleteSettingsScreen</Text>
      <Button title="Logout" onPress={onLogOutPress} />
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
