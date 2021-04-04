import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const randomNumberGenerator = (usedCodes) => {
  let newCode = "";
  for (let i = 0; i < 6; i++) {
    newCode += Math.floor(Math.random() * 10);
  }
  return newCode;
};

const CoachSettingsScreen = ({ navigation }) => {
  const [usedCodes, setUsedCodes] = useState(new Set());
  const [teamCode, setTeamCode] = useState("");

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>CoachSettingsScreen</Text>
      <Button title="Logout" onPress={() => navigation.navigate("loginFlow")} />
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
