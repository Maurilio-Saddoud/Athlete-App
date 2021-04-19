import React, { useState } from "react";
import { View, StyleSheet, Text, Button, Alert } from "react-native";
import { firebase } from '../../firebase/config';

const CoachSettingsScreen = ({ navigation }) => {
  const [usedCodes, setUsedCodes] = useState(new Set());
  const [teamCode, setTeamCode] = useState("");
  const user = firebase.auth().currentUser;

  const randomNumberGenerator = () => {
    let newCode = "";
    for (let i = 0; i < 6; i++) {
      newCode += Math.floor(Math.random() * 10);
    }
    return newCode;
  };

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
      <Text style={styles.textStyle}>CoachSettingsScreen</Text>
      <Button title="Logout" onPress={onLogOutPress} />
      {!teamCode ? (
        <Button
          title="Generate Join Code"
          onPress={() => {
            let newCode;
            do {newCode = randomNumberGenerator(usedCodes);
            } while (usedCodes.has(newCode));
            setTeamCode(newCode)

            setUsedCodes(usedCodes => new Set(usedCodes).add(newCode));
            console.log(usedCodes)
            console.log(newCode)
            console.log("Team Code:" + teamCode + ".")
          }}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  viewStyle: {
    margin: 40,
  },
});

export default CoachSettingsScreen;
