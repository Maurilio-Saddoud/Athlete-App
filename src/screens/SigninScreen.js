import React, { useState } from "react";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";
import LoginBar from "../components/LoginBar";

const SigninScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [term2, setTerm2] = useState("");
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.kumoStyle}>KUMO</Text>
      <View style={styles.underlineStyle} />
      <Text style={styles.metricStyle}>Metrics</Text>
      <Text style={styles.login}>Login:</Text>
      <LoginBar
        text={"Username"}
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        secure={false}
      />
      <LoginBar
        text={"Password"}
        term={term2}
        onTermChange={(newTerm2) => setTerm2(newTerm2)}
        secure={true}
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate("athleteFlow")}
      />
      <Button
        title="create Account"
        onPress={() => navigation.navigate("CoachOrAthlete")}
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: "center",
    marginTop: 150,
  },
  kumoStyle: {
    fontSize: 70,
    fontWeight: "bold",
    color: "#8ecfff",
    fontFamily: "Open Sans",
  },
  metricStyle: {
    fontSize: 35,
    color: "grey",
    bottom: 20,
    marginLeft: 60,
    fontWeight: "bold",
  },
  login: {
    alignSelf: "flex-start",
    left: 50,
  },
});

export default SigninScreen;
