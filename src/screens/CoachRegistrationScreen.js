import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, StyleSheet, Text, Button } from "react-native";
import AuthForm from "../components/AuthForm";

const CoachRegistrationScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [teamName, setTeamName] = useState("");

  return (
    <View style={styles.screenStyle}>
      <KeyboardAwareScrollView>
        <Text style={styles.textStyle}>CoachRegistrationScreen</Text>
        <Button
          title="Register & Create Team"
          onPress={() => navigation.navigate("CoachCreateTeam")}
        />
        <AuthForm text="Full Name" />
        <AuthForm text="Email" />
        <AuthForm text="Password" />
        <AuthForm text="Confirm Password" />
        <AuthForm text="Team Name" />
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  screenStyle: {
    flex: 1,
    backgroundColor: "black"
  }
});

export default CoachRegistrationScreen;
