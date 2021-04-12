import React from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import RegistrationForm from "../components/RegistrationForm";
import Spacer from '../components/Spacer';

const AthleteRegistrationScreen = ({ navigation }) => {
  return (
      <View style = {styles.viewStyle}>
      <RegistrationForm />
      <Spacer space = {20} />
      <TouchableOpacity onPress = {() => navigation.navigate("AthleteQ")}
      style = {styles.buttonStyle}>
        <Text  style = {styles.opacityStyle}>Register</Text>
      </TouchableOpacity>
      </View>
  )
};

AthleteRegistrationScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: "black",
    shadowColor: 'transparent'
  },
  
  headerTintColor: "#8ecfff",
  headerBackTitle: "Back",
  title: ""
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  viewStyle: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  opacityStyle: {
    color: '#8ecfff',
    fontSize: 25
  },
  buttonStyle: {
    height: 75,
    width: 150,
    borderColor: "#8ecfff",
    marginBottom: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5
  },
});

export default AthleteRegistrationScreen;
