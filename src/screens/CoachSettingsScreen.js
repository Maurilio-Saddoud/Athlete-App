import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, Alert, Switch } from "react-native";
import { firebase } from "../../firebase/config";
import DisplayJoinCode from "../components/DisplayJoinCode";

const CoachSettingsScreen = ({ navigation }) => {
  const [isAthleteCode, changeAthleteCode] = useState(false);
  const uid = firebase.auth().currentUser.uid;
  const userRef = firebase.firestore().collection("users").doc(uid);

  var coachCode;
  var [signUpCode, setSignUpCode] = useState("");
  var teamId;
  var teamName;
  var teamRef;
  

  useEffect(() => {
    userRef
      .get()
      .then((user) => {
        teamId = user.data().teamId;
      })
      .then(() => {
        //console.log("Team ID: " + teamId)
        teamRef = firebase.firestore().collection("teams").doc(teamId);
        teamRef
          .get()
          .then((team) => {
            coachCode = team.data().coachCode;
            setSignUpCode(team.data().signUpCode);
            //console.log(signUpCode);
            if(signUpCode) changeAthleteCode(true);
            teamName = team.data().teamName;
          })
          .catch((error) => {
            Alert.alert(error.message);
          })
          .catch((error) => {
            Alert.alert(error.message);
          })
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  }, []);

  const checkCoachCode = () => {
    if (coachCode) return true;
    else return false;
  };
  const checkAthleteCode = () => {
    if (signUpCode) return true;
    else return false;
  };
  // this state is just to tell the switch which position to go into
  const [isCoachCode, changeCoachCode] = useState(checkCoachCode);
  

  var toggleAthlete = () => {
    console.log("1",signUpCode)
    console.log(teamId);
    if (isAthleteCode) {
      console.log(teamRef);
      teamRef
        .update({
          signUpCode: "",
        })
        .then(() => {
          changeAthleteCode(false);
          setSignUpCode("");
        })
        .catch((error) => {
          Alert.alert(error.message);
        });
    } else {
      const newJoinCode = randomNumberGenerator();
      teamRef
        .update({ signUpCode: newJoinCode })
        .then(() => {
          changeAthleteCode(true);
          setSignUpCode(newJoinCode);
        })
        .catch((error) => {
          Alert.alert(error.message);
        });
    }
    console.log("new code: ", signUpCode)
  };
  const toggleCoach = () => {};

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
      <Text style={styles.headerStyle}>Settings</Text>
      <View style={{ marginBottom: "5%" }}>
        <DisplayJoinCode code={signUpCode} type="Athlete" />
        <View style={styles.joinCodeButton}>
          <Text style={styles.buttonTextStyle}>Add Athletes</Text>
          <Switch
            trackColor={{ false: "red", true: "#8ecfff" }}
            thumbColor="white"
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleAthlete}
            value={isAthleteCode}
          />
        </View>
      </View>
      <View>
        <DisplayJoinCode code={"776644"} type="Coach" />
        <View style={styles.joinCodeButton}>
          <Text style={styles.buttonTextStyle}>Add Coaches</Text>
          <Switch
            trackColor={{ false: "red", true: "#8ecfff" }}
            thumbColor="white"
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleCoach}
            value={isCoachCode}
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
  headerStyle: {
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
  buttonTextStyle: {
    color: "white",
    fontFamily: "goodTimes",
    fontSize: 18,
  },
});

export default CoachSettingsScreen;
