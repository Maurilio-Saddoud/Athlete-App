import React, {useState} from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import CodeBar from '../components/CodeBar';

const AthleteJoinCodeScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  return (
    <View style = {styles.viewStyle}>
      <Text style={styles.textStyle}>Enter Team Join Code</Text>
      <CodeBar 
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
    fontSize: 30
  },
  viewStyle: {
    alignItems: "center",
    top: 150

  }
});

export default AthleteJoinCodeScreen;
