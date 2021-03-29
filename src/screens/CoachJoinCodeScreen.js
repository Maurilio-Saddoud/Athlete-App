import React, {useState} from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import CodeBar from '../components/CodeBar';

const CoachJoinCodeScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  return (
    <View style = {styles.viewStyle}>
      <Text style={styles.textStyle}>Enter Coach Code</Text>
      <CodeBar 
      text = {"Coach Code"}
      term = {term}
      onTermChange = {(newTerm) => setTerm(newTerm)}
      />
      <Button 
      title="Join Team" 
      onPress={() => navigation.navigate("TeamData")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  viewStyle: {
    alignItems: 'center',
    top: 150
  }
});

export default CoachJoinCodeScreen;
