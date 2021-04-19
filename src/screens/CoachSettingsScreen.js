import React, { useState } from "react";
import { View, StyleSheet, Text, Button, Alert, Switch } from "react-native";
import { firebase } from "../../firebase/config";
import DisplayJoinCode from "../components/DisplayJoinCode";

const CoachSettingsScreen = ({ navigation }) => {
  const [teamCode, setTeamCode] = useState("");
  const user = firebase.auth().currentUser;

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const randomNumberGenerator = () => {
    let newCode = "";
    for (let i = 0; i < 6; i++) {
      newCode += Math.floor(Math.random() * 10);
    }
    return newCode;
  };

  const onLogOutPress = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate("loginFlow");
      })
      .catch((error) => {
        Alert.alert("Logout Failed");
      });
  };

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Settings</Text>
      <View style={{marginBottom: "5%"}}>
        <DisplayJoinCode code={"776644"} type="Athlete" />

        <View style={styles.joinCodeButton}>
          <Text
            style={{ color: "white", fontFamily: "goodTimes", fontSize: 18 }}
          >
            Add Athletes
          </Text>
          <Switch
            trackColor={{ false: "red", true: "#8ecfff" }}
            thumbColor="white"
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View>
        <DisplayJoinCode code={"776644"} type="Coach" />
        <View style={styles.joinCodeButton}>
          <Text
            style={{ color: "white", fontFamily: "goodTimes", fontSize: 18 }}
          >
            Add Coaches
          </Text>
          <Switch
            trackColor={{ false: "red", true: "#8ecfff" }}
            thumbColor="white"
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>

      <Button title="Logout" onPress={onLogOutPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  joinCodeButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "1%",

  },
  textStyle: {
    fontSize: 30,
    color: "#8ecfff",
    fontFamily: "goodTimes",
    marginTop: "5%",
    marginBottom: "10%",
    textAlign: "center",
  },
  viewStyle: {
    paddingVertical: "7%",
    paddingHorizontal: "2%",
    backgroundColor: "black",
    flex: 1,
  },
});

export default CoachSettingsScreen;
