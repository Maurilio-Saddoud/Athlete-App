import React, {useState} from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import LoginBar from '../components/LoginBar';

const AthleteJoinCodeScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  return (
    <View style = {styles.viewStyle}>
      <Text style={styles.textStyle}>Enter Team Join Code</Text>
      <LoginBar 
      text = {"Athlete Code"}
      term = {term}
      onTermChange = {(newTerm) => setTerm(newTerm)}
      />
      <Button
        title="Join Team"
        onPress={() => navigation.navigate("AthleteRegistration")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "white",
    marginTop: 200 
  },
  viewStyle: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black"

  }
});

export default AthleteJoinCodeScreen;
