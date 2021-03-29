import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import LoginBar from "../components/LoginBar";
import Spacer from "../components/Spacer";

const AthleteJoinCodeScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Enter Team Join Code</Text>
        <Spacer space={10} />
        <LoginBar
          text="Athlete Code"
          term={term}
          onTermChange={(newTerm) => setTerm(newTerm)}
        />
        <Spacer space={40} />
        <Button
          title="Join Team"
          onPress={() => navigation.navigate("AthleteRegistration")}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

AthleteJoinCodeScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    color: "white",
    marginTop: "70%",
    fontFamily: "goodTimes"
  },
  viewStyle: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
});

export default AthleteJoinCodeScreen;
